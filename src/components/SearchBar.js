import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/SearchBar.css';
import '../styles/tools/AllTools.css';
import '../styles/tools/LeftSide.css';


class SearchBar extends Component {

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
      <Paper className="SearchBar AllTools LeftSide" zDepth={this.constants.paperZDepth}>
        <Tabs>
          <Tab label={this.props.localisedStrings.journeyPattern}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchBar.searchJourneyPatternsHintText}
                          dataSource={this.state.dataSource}
                          onUpdateInput={this.handleUpdateInput}
                          fullWidth={true}
            />
          </Tab>
          <Tab label={this.props.localisedStrings.stop}>
            <AutoComplete className="AutoComplete"
                          hintText={this.props.localisedStrings.searchBar.searchStopsHintText}
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

SearchBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default SearchBar;