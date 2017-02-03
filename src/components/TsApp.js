import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TsMap from './TsMap.js';
import TsSearchPanel from './panels/TsSearchPanel.js';
import TsJourneyPatternPanel from './panels/TsJourneyPatternPanel.js';
import TsDaySelectPanel from './panels/TsDaySelectPanel.js';
import LocalizedStrings from 'react-localization';
import { getLocalisation } from '../TsLocalisation';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/TsApp.css';

class TsApp extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      localisedStrings: new LocalizedStrings(getLocalisation()),
      journeyPatternPanelVisible: false
    };
    this.state.localisedStrings.setLanguage('fi');
    this.setJourneyPattermPanelVisibility = this.setJourneyPattermPanelVisibility.bind(this);
    document.title = this.state.localisedStrings.pageTitle;
  }

  render() {
    return (
      <div className="TsApp">
        <TsMap/>
        <TsSearchPanel setJourneyPattermPanelVisibility={this.setJourneyPattermPanelVisibility}
          localisedStrings={this.state.localisedStrings}/>
        <TsJourneyPatternPanel panelVisible={this.state.journeyPatternPanelVisible}
          localisedStrings={this.state.localisedStrings}/>
        <TsDaySelectPanel localisedStrings={this.state.localisedStrings}/>
      </div>
    );
  }

  setJourneyPattermPanelVisibility(panelVisibility) {
    this.setState({
      journeyPatternPanelVisible : panelVisibility
    });
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    }
  }
}

TsApp.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default TsApp;
