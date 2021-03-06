import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TsMap from './TsMap.js';
import TsSearchPanel from './panels/TsSearchPanel.js';
import TsJourneyPatternPanel from './panels/TsJourneyPatternPanel.js';
import TsJourneyDataPanel from './panels/journeydata/TsJourneyDataPanel';
import TsDaySelectPanel from './panels/TsDaySelectPanel.js';
import TsVehicleDataPanel from './panels/vehicle/TsVehicleDataPanel.js';
import TsGraphPanel from './panels/TsGraphPanel.js'
import TsDialogHandler from './dialogs/TsDialogHandler';
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
      localisedStrings: new LocalizedStrings(getLocalisation())
    };
    this.state.localisedStrings.setLanguage('fi');
    document.title = this.state.localisedStrings.pageTitle;
  }

  render() {
    return (
      <div className="TsApp">
        <TsMap localisedStrings={this.state.localisedStrings}/>
        <TsSearchPanel localisedStrings={this.state.localisedStrings}/>
        <TsJourneyPatternPanel localisedStrings={this.state.localisedStrings}/>
        <TsJourneyDataPanel localisedStrings={this.state.localisedStrings}/>
        <TsDaySelectPanel localisedStrings={this.state.localisedStrings}/>
        <TsVehicleDataPanel localisedStrings={this.state.localisedStrings}/>
        <TsDialogHandler localisedStrings={this.state.localisedStrings}/>
        <TsGraphPanel localisedStrings={this.state.localisedStrings}/>
      </div>
    );
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
