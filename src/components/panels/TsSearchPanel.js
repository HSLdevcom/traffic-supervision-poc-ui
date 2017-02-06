import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import {connect} from 'react-redux';
import {TsJourneyPatternParsers, TsStopParsers} from '../../util/TsParsers';
import {TsJourneyPatternActions} from '../../redux/actions'
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/customized-mui/Tabs.css'
import '../../styles/panels/TsSearchPanel.css';
import '../../styles/panels/LeftSide.css';

import {DummyJourneyPatterns} from '../../dummydata/JourneyPatterns'; //todo; replace with real data
import {DummyLinksForJourneyPattern} from '../../dummydata/LinksForJourneyPattern';
import {DummyStops} from '../../dummydata/Stops'

class TsSearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matchingJourneyPatterns: [],
      matchingStops: []
    };
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.onJourneyPatternSelected = this.onJourneyPatternSelected.bind(this);
  };

  renderJourneyPatterns(journeyPatterns) {
    return journeyPatterns.map(function(journeyPattern) {
      return {
        id: journeyPattern.id,
        text: TsJourneyPatternParsers.getJourneyPatternDescription(journeyPattern)
      };
    })
  };

  renderStops(stops) {
    return stops.map(function(stop) {
      return {
        id: stop.id,
        text: TsStopParsers.getStopDescription(stop)
      };
    })
  };

  onJourneyPatternSelected(item) {
    let journeyPattern;
    if (item instanceof Object) {
      journeyPattern = this.state.matchingJourneyPatterns.find(
        function(element) { return item.id === element.id; }
      );
      console.log(journeyPattern);
      if (journeyPattern) {
        this.props.dispatch(TsJourneyPatternActions.setSelectedJourneyPattern(
          journeyPattern, DummyLinksForJourneyPattern));
      }
    }

    if (!journeyPattern) { // not valid selection
      this.props.dispatch(TsJourneyPatternActions.clearSelectedJourneyPattern());
    }
  };

  onStopSelected(item) {
    if (item instanceof Object) {
      console.log(item)
    }
  };

  onUpdateInput(searchText) {
    // todo; these will really be loaded from backend, now just setting hard coded values
    this.setState({
      matchingJourneyPatterns: DummyJourneyPatterns,
      matchingStops: DummyStops
    });
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
                          dataSource={this.renderJourneyPatterns(DummyJourneyPatterns)}
                          dataSourceConfig={{text: 'text', value: 'id'}}
                          filter={(searchText, key) => searchText.length > 0}
                          onUpdateInput={this.onUpdateInput}
                          onNewRequest={this.onJourneyPatternSelected}
                          fullWidth={true}
            />
          </Tab>
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.stop}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchStopsHintText}
                          dataSource={this.renderStops(DummyStops)}
                          dataSourceConfig={{text: 'text', value: 'id'}}
                          filter={(searchText, key) => searchText.length > 0}
                          onUpdateInput={this.onUpdateInput}
                          onNewRequest={this.onStopSelected}
                          fullWidth={true}
            />
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}

export default connect()(TsSearchPanel);