import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import {TsCommonStyle} from '../../TsConfiguration';
import {TsJourneyPatternParsers} from '../../util/TsParsers';
import '../../styles/customized-mui/Tabs.css'
import '../../styles/panels/TsSearchPanel.css';
import '../../styles/panels/LeftSide.css';

import {DummyJourneyPatterns} from '../../dummydata/JourneyPatterns'; //todo; replace with real data


class TsSearchPanel extends Component {

  renderJourneyPatterns() {
    return DummyJourneyPatterns.map(function(journeyPattern) {
      return {
        id: journeyPattern.id,
        text: TsJourneyPatternParsers.getJourneyPatternDescription(journeyPattern)
      };
    })
  };

  journeyPatternDataSource = this.renderJourneyPatterns();

  onJourneyPatternSelected(item) {
    if (item instanceof Object) {
      console.log(item)
    }
  };

  render() {
    return (
      <Paper className="TsSearchPanel LeftSide"
             style={TsCommonStyle.paper.style}
             zDepth={TsCommonStyle.paper.paperZDepth}>
        <Tabs className="Tabs">
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPattern}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchJourneyPatternsHintText}
                          dataSource={this.journeyPatternDataSource}
                          dataSourceConfig={{text: 'text', value: 'id'}}
                          filter={(searchText, key) => searchText.length > 0 ? true : false}
                          onNewRequest={this.onJourneyPatternSelected}
                          fullWidth={true}
            />
          </Tab>
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.stop}>
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
}

export default TsSearchPanel;