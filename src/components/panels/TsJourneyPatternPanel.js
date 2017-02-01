import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/panels/LeftSide.css';
import '../../styles/panels/TsJourneyPatternPanel.css'


class TsJourneyPatternPanel extends Component {

  render() {
    return (
      <Paper className="TsJourneyPatternPanel LeftSide" style={TsCommonStyle.paper.style}
             zDepth={TsCommonStyle.paper.paperZDepth}>
        <Tabs className="Tabs">
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPatternPanel.stopListTabTitle}>
            <p>--sisältö vielä puuttuu--</p>
          </Tab>
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPatternPanel.completedDeparturesTabTitle}>
            <p>--sisältö vielä puuttuu 2--</p>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}

export default TsJourneyPatternPanel;