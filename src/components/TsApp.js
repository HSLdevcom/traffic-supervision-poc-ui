import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TsMap from './TsMap.js';
import TsSearchPanel from './panels/TsSearchPanel.js';
import '../styles/TsApp.css';

//todo; currently here, rethink when redux:ing
import LocalizedStrings from 'react-localization';
const localisation = {
  fi: {
    pageTitle: 'Liikenteen valvontatyökalu',
    journeyPattern: 'Reitti',
    stop: 'Pysäkki',
    searchPanel: {
      searchJourneyPatternsHintText: 'Etsi reittejä',
      searchStopsHintText: 'Etsi pysäkkejä'
    }
  },
  en: {}
};

class TsApp extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      localisedStrings: new LocalizedStrings(localisation)
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