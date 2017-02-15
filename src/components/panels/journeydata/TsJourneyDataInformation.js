import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import "moment/locale/fi";
import {TsTimeParsers} from '../../../util/TsParsers';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Forward from 'material-ui/svg-icons/content/forward'
import {TsCommonStyle} from '../../../TsConfiguration';
import '../../../styles/common/TsRow.css'
import '../../../styles/panels/journeydata/TsJourneyDataInformation.css'

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

    const planned = this.props.selected.journey.planned;
    const monitored = this.props.selected.journey.monitored;

    return (
      <div className="TsJourneyData">
        <List>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.startTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {TsJourneyDataUtil.parseDateTimeToTimeString(planned.startTime)}
              </div>
              <Forward style={{height: '14px', marginRight: '5px'}} />
              <div className="TsRowContentItem TsHiglightedText">
                {TsTimeParsers.getTimeDifferenceLabel(planned.startTime, monitored.startTime, true)}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.endTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {TsJourneyDataUtil.parseDateTimeToTimeString(planned.endTime)}
                <Forward style={{height: '14px', marginRight: '5px'}} />
                <div className="TsRowContentItem TsHiglightedText">
                  {TsTimeParsers.getTimeDifferenceLabel(planned.endTime, monitored.endTime, true)}
                </div>
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.terminalTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {moment(planned.terminalTime * 1000).minutes() + 'min (10:22)'}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.recoveryTime}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {moment(planned.recoveryTime * 1000).minutes() + 'min (10:50)'}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.requiredVehicleClass}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {planned.requiredVehicleClass}
              </div>
              <Forward style={{height: '14px', marginRight: '5px'}} />
              <div className="TsRowContentItem TsHiglightedText">
                {monitored.vehicles[0].vehicleClass}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.contractReference}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {planned.contractReference}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.operator}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {planned.mainOperator.name}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.subContractors}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem">
                {planned.subContractors[0].name}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.driver}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem TsHiglightedText">
                {monitored.drivers}
              </div>
            </div>
          </ListItem>
          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.entries}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem TsHiglightedText">
                {monitored.totalEntries}
              </div>
            </div>
          </ListItem>

          <ListItem className="TsRow" disabled={true}>
            <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.maximumLoad}</div>
            <div className="TsRowContent">
              <div className="TsRowContentItem TsHiglightedText">
                {monitored.maximumLoad}
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
