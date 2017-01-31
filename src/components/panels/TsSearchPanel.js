import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../../styles/panels/TsSearchPanel.css';
import '../../styles/panels/AllPanels.css';
import '../../styles/panels/LeftSide.css';


class TsSearchPanel extends Component {

  state = {
    dataSource: [],
  };
  constants = {
    paperZDepth: 3
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <Paper className="TsSearchPanel AllPanels LeftSide" zDepth={this.constants.paperZDepth}>
        <Tabs>
          <Tab label={this.props.localisedStrings.journeyPattern}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchJourneyPatternsHintText}
                          dataSource={this.state.dataSource}
                          onUpdateInput={this.handleUpdateInput}
                          fullWidth={true}
            />
          </Tab>
          <Tab label={this.props.localisedStrings.stop}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchPanel.searchStopsHintText}
                          dataSource={this.state.dataSource}
                          onUpdateInput={this.handleUpdateInput}
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