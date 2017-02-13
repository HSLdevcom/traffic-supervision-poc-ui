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

    let splitTimeToArray = function(timeString) {
      return timeString.split(":");
    };

    let parseVisitDelayString = function(visit) {
      const delayInMinutes = visit.delay / 60;
      return `(${delayInMinutes > 0 ? '+' : ''}${parseInt(delayInMinutes, 10)})`;
    };

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

      if (visitingJourneyPattern.stopVisits) {// data could include always empty array?
        visitingJourneyPattern.stopVisits.forEach(function(stopVisit) {
          if (that.state.uncheckedJourneyPatternIds.indexOf(visitingJourneyPattern.id) !== -1) {
            return;
          }
          const timeArrayPlanned = splitTimeToArray(stopVisit.plannedTime);
          const timeArrayActual = splitTimeToArray(stopVisit.actualTime);
          tableRows.push(<TableRow className="TsStopVisitDialogTableRow" key={stopVisit.journeyId}>
            <TableRowColumn>{timeArrayPlanned[0]}</TableRowColumn>
            <TableRowColumn>{timeArrayPlanned[1]}/{timeArrayActual[1]}{parseVisitDelayString(stopVisit)}/<b>{visitingJourneyPattern.line.designation}</b></TableRowColumn>
          </TableRow>);
        });
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