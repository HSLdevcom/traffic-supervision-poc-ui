import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AvLoop from 'material-ui/svg-icons/av/loop'
import {TsJourneyPatternParsers} from '../../../util/TsParsers';
import {TsCommonStyle} from '../../../TsConfiguration';
import '../../../styles/common/TsRow.css'
import '../../../styles/panels/journeydata/TsJourneyDataSearch.css'

import {DummyJourneyPatterns} from '../../../dummydata/JourneyPatterns'; //todo; replace with real data

class TsJourneyDataSearch extends Component {

  render() {
    const switchDirectionButtonStyle = {
      height: TsCommonStyle.raisedButton.height,
      minWidth:'25px',
      width: '25px'
    };
    const nextPreviousButtonStyle = {
      height: TsCommonStyle.raisedButton.height,
      minWidth:'40px',
      width: '40px',
      padding: 0
    };

    return (
      <div className="TsJourneyDataSearch">
        <List>
          <ListItem className="TsRow" disabled={true}>
              <div className="TsRowTitle">{this.props.localisedStrings.line}</div>
              <span className="TsRowContent">
                <div className="TsRowContentItem">{TsJourneyPatternParsers.getJourneyPatternDescription(DummyJourneyPatterns[0])}</div>
                <RaisedButton className="TsRowContentItem TsDirectionSwitchButton" primary={true}
                              style={switchDirectionButtonStyle}
                              icon={<AvLoop viewBox="0 0 24 28"/>} />
              </span>
          </ListItem>
          <ListItem className="TsRow TsTimeSelect" disabled={true}>
              <div className="TsRowTitle">{this.props.localisedStrings.journeyDataPanel.startTime}</div>
              <div className="TsRowContent">
                <RaisedButton className="TsRowContentItem" primary={true} style={nextPreviousButtonStyle} label="<"/>
                <select className="TsRowContentItem">
                  <option>07:55</option>
                  <option>09:20</option>
                  <option>11:05</option>
                </select>
                <RaisedButton className="TsRowContentItem" primary={true} style={nextPreviousButtonStyle} label=">"/>
            </div>
          </ListItem>
        </List>
        <Divider className="TsRowDivider"/>
      </div>
    );
  }
}

export default TsJourneyDataSearch;
