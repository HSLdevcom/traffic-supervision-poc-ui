import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {TsCommonStyle} from '../../../TsConfiguration';
import '../../../styles/common/TsRow.css'
import '../../../styles/panels/journeydata/TsJourneyData.css'

const TsJourneyDataUtil = {
  parseDateTimeToTimeString: function(dateTime) {
    return dateTime.split('T')[1];
  }
};

class TsJourneyDataInformation extends Component {

  render() {
    if (!this.props.selected.journey.journeyId) {
      return null;
    }

    const deviationCaseAndBulletinsButtons = {
      height: TsCommonStyle.raisedButton.height,
      fontSize: '10px',
      padding: 0
    };

    return (
      <div className="TsJourneyData">
        <List>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.startTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {TsJourneyDataUtil.parseDateTimeToTimeString(this.props.selected.journey.planned.startTime)}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.endTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {TsJourneyDataUtil.parseDateTimeToTimeString(this.props.selected.journey.planned.endTime)}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.terminalTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.planned.terminalTime}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.recoveryTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.planned.recoveryTime}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.requiredVehicleClass}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.planned.requiredVehicleClass}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.contractReference}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.planned.contractReference}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.operator}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.planned.mainOperator.name}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.subContractors}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.planned.subContractors[0].name}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.driver}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.monitored.drivers}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.entries}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.monitored.totalEntries}
              </div>
            </div>
          </ListItem>

          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.maximumLoad}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {this.props.selected.journey.monitored.maximumLoad}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.deviationCases}</div>
            <div className="TsRowContent">
              <RaisedButton className="TsRowContentItem" primary={true} style={deviationCaseAndBulletinsButtons}
                            label="2 häiriötä, Lähtö peruttu"/>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.bulletins}</div>
            <div className="TsRowContent">
              <RaisedButton className="TsRowContentItem" primary={true} style={deviationCaseAndBulletinsButtons}
                            label="1 häiriötiedote, 1 matkustajatiedote"/>
            </div>
          </ListItem>
        </List>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    selected: store.journeysState.selected
  };
};
export default connect(mapStateToProps)(TsJourneyDataInformation);
