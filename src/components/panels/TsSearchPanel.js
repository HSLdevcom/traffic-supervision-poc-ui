import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../../styles/panels/TsSearchPanel.css';
import '../../styles/panels/AllPanels.css';
import '../../styles/panels/LeftSide.css';

import { getDummyJourneyPatterns } from '../../DummyData'; //todo; replace with real data

class TsSearchPanel extends Component {

  renderJourneyPatterns() {
    return getDummyJourneyPatterns().map(function(journeyPattern) {
      return {
        id: journeyPattern.id,
        text: journeyPattern.line.designation +
        " " + journeyPattern.directionOfLine.description +
        " (" + journeyPattern.directionOfLine.direction + ")" };
    })
  };

  constants = {
    paperZDepth: 3,
    journeyPatternDataSource: this.renderJourneyPatterns()
  };

  onJourneyPatternSelected(item) {
    if (item instanceof Object) {
      console.log(item)
    }
  };

  render() {
    return (
      <Paper className="TsSearchPanel AllPanels LeftSide" zDepth={this.constants.paperZDepth}>
        <Tabs>
          <Tab label={this.props.localisedStrings.journeyPattern}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchJourneyPatternsHintText}
                          dataSource={this.constants.journeyPatternDataSource}
                          dataSourceConfig={{text: 'text', value: 'id'}}
                          onNewRequest={this.onJourneyPatternSelected}
                          fullWidth={true}
            />
          </Tab>
          <Tab label={this.props.localisedStrings.stop}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchStopsHintText}
                          dataSource={[]}
                          fullWidth={true}
            />
          </Tab>
        </Tabs>
      </Paper>
    );
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    }
  }
}

TsSearchPanel.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default TsSearchPanel;