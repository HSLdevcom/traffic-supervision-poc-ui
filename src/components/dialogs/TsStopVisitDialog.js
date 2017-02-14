import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TsDialog from '../common/TsDialog';
import {TsStopParsers, TsJourneyPatternParsers} from '../../util/TsParsers';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/TsApp.css'
import '../../styles/dialogs/TsStopVisitDialog.css';

const TsStopVisitParser = {

  splitTimeToArray: function (timeString) {
    return timeString.split(":");
  },

  parseVisitDelayString: function (visit) {
    const delayInMinutes = visit.delay / 60;
    return `(${delayInMinutes > 0 ? '+' : ''}${parseInt(delayInMinutes, 10)})`;
  },

  findStopVisitsOnSameHour: function (currentIndex, allStopVisits) {
    let sameHourStopVisits = [];
    const currentStopVisit = allStopVisits[currentIndex];
    for (let i = currentIndex; i < allStopVisits.length; i++) {
      const candidateStopVisit = allStopVisits[i];
      if (TsStopVisitParser.splitTimeToArray(currentStopVisit.plannedTime)[0] ===
            TsStopVisitParser.splitTimeToArray(candidateStopVisit.plannedTime)[0]) {
        sameHourStopVisits.push(candidateStopVisit);
      } else {
        break;
      }
    }
    return sameHourStopVisits;
  }
};

class TsStopVisitDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uncheckedJourneyPatternIds: []
    };
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.onStreetViewButtonClick = this.onStreetViewButtonClick.bind(this);
  };

  onCheckBoxChange(journeyPatternId, event, isInputChecked) {
    let newUncheckedIds = this.state.uncheckedJourneyPatternIds.slice();
    const index = newUncheckedIds.indexOf(journeyPatternId);
    if (isInputChecked && index !== -1) {
      newUncheckedIds.splice(index, 1);
    } else if (!isInputChecked && index === -1) {
      newUncheckedIds.push(journeyPatternId);
    }

    if (this.state.uncheckedJourneyPatternIds.length !== newUncheckedIds.length) {
      this.setState({
        uncheckedJourneyPatternIds: newUncheckedIds
      });
    }
  };

  onStreetViewButtonClick() {
    let url = `http://maps.google.com/maps?q=&layer=c&cbll=${this.props.selected.stop.location.latitude},${this.props.selected.stop.location.longitude}`;
    window.open(url,'_blank');
  }

  render() {
    if (this.props.selected.stop.id === undefined) {
      return null;
    }

    let checkboxes = [];
    let tableRows = [];
    const that = this;
    this.props.selected.stopVisits.visitingJourneyPatterns.forEach(function(visitingJourneyPattern) {
      checkboxes.push(
        <li key={visitingJourneyPattern.id}>
          <Checkbox checked={that.state.uncheckedJourneyPatternIds.indexOf(visitingJourneyPattern.id) === -1}
                    onCheck={that.onCheckBoxChange.bind(that, visitingJourneyPattern.id)}
                    label={TsJourneyPatternParsers.getVisitingJourneyPatternDescription(visitingJourneyPattern)}/>
        </li>);

      if (that.state.uncheckedJourneyPatternIds.indexOf(visitingJourneyPattern.id) !== -1) {
        return;// filtering stop visits out
      }

      if (visitingJourneyPattern.stopVisits) {// data could include always empty array?
        for(let i = 0; i < visitingJourneyPattern.stopVisits.length;/* index handling done based on visits on same hour count */) {
          const visitsOnSameHour = TsStopVisitParser.findStopVisitsOnSameHour(i, visitingJourneyPattern.stopVisits);
          const timeArrayPlannedOnFirstStopVisit = TsStopVisitParser.splitTimeToArray(visitsOnSameHour[0].plannedTime);

          const visitsOnSameHourHtml = visitsOnSameHour.map(function(stopVisit){
            const timeArrayPlanned = TsStopVisitParser.splitTimeToArray(stopVisit.plannedTime);
            const timeArrayActual = TsStopVisitParser.splitTimeToArray(stopVisit.actualTime);
            return <span className="TsStopVisitTd" key={`${visitingJourneyPattern.id}_${stopVisit.plannedTime}`}>
                {timeArrayPlanned[1]}/{timeArrayActual[1]}{TsStopVisitParser.parseVisitDelayString(stopVisit)}/<b>{visitingJourneyPattern.line.designation}</b>
              </span>;
          });

          tableRows.push(<TableRow key={`${visitingJourneyPattern.id}_${timeArrayPlannedOnFirstStopVisit[0]}`}>
            <TableRowColumn>{timeArrayPlannedOnFirstStopVisit[0]}</TableRowColumn>
            <TableRowColumn>{visitsOnSameHourHtml}</TableRowColumn>
          </TableRow>);
          i = visitsOnSameHour.length > 1 ? i + visitsOnSameHour.length : i++;
        }
      }
    });

    const dialogContent =
      <div className="TsStopVisitDialogContent">
        <div className="CheckboxTitle">{this.props.localisedStrings.stopVisitDialog.journeyPatternCheckboxTitle}</div>
        <ul className="Checkboxes clearfix">{checkboxes}</ul>
        <Table>
          <TableHeader className="TsStopVisitDialogTableHeader"
              enableSelectAll={TsCommonStyle.table.header.enableSelectAll}
              displaySelectAll={TsCommonStyle.table.header.displaySelectAll}
              adjustForCheckbox={TsCommonStyle.table.header.adjustForCheckbox}>
            <TableRow>
              <TableHeaderColumn>Tunnit</TableHeaderColumn>
              <TableHeaderColumn>Min(suunn.)/Min(tot.)/Linja</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={TsCommonStyle.table.displayRowCheckbox}>{tableRows}</TableBody>
        </Table>
        <RaisedButton className="TsStreetViewButton" primary={true}
          style={{height: TsCommonStyle.raisedButton.height}}
          label={this.props.localisedStrings.stopVisitDialog.googleStreetViewButton}
          onClick={this.onStreetViewButtonClick}/>
      </div>;

    //todo; className gets lost if inside TsDialog, currently needs separate div
    return (
      <div className="TsStopVisitDialog">
        <TsDialog dialogTitle={TsStopParsers.getLongStopDescription(this.props.selected.stop)}
                  dialogContent={dialogContent}
                  dialogVisible={this.props.stopVisitDialogVisible}
                  dialogCloseRequest={this.props.stopVisitDialogCloseRequest} />
      </div>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selected: store.stopsState.selected
  };
};
export default connect(mapStateToProps)(TsStopVisitDialog);