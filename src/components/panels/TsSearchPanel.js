import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/customized-mui/Tabs.css'
import '../../styles/panels/TsSearchPanel.css';
import '../../styles/panels/LeftSide.css';

import {DummyJourneyPatterns} from '../../dummydata/JourneyPatterns'; //todo; replace with real data


class TsSearchPanel extends Component {

  renderJourneyPatterns() {
    return DummyJourneyPatterns.map(function(journeyPattern) {
      const journeyDesc = `${journeyPattern.line.designation}${journeyPattern.variant ? '_' + journeyPattern.variant : ''}
            ${journeyPattern.directionOfLine.description}
            (${journeyPattern.directionOfLine.direction})`;
      return {
        id: journeyPattern.id,
        text: journeyDesc
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
          <Tab className="Tab" label={this.props.localisedStrings.journeyPattern}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchJourneyPatternsHintText}
                          dataSource={this.journeyPatternDataSource}
                          dataSourceConfig={{text: 'text', value: 'id'}}
                          onNewRequest={this.onJourneyPatternSelected}
                          fullWidth={true}
            />
          </Tab>
          <Tab className="Tab" label={this.props.localisedStrings.stop}>
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