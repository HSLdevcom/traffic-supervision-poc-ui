import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TsMap from './TsMap.js';
import TsSearchPanel from './panels/TsSearchPanel.js';
import '../styles/TsApp.css';
import LocalizedStrings from 'react-localization';
import { getLocalisation } from '../Localisation';

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
        <TsMap/>
        <TsSearchPanel localisedStrings={this.state.localisedStrings}/>
      </div>
    );
  }
}

export default TsApp;