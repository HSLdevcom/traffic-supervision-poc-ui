import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Map from './Map.js';
import SearchBar from './SearchBar.js';
import '../styles/App.css';

//todo; currently here, rethink when redux:ing
import LocalizedStrings from 'react-localization';
const localisation = {
  fi: {
    journeyPattern: 'Reitti',
    stop: 'Pysäkki',
    searchBar: {
      searchJourneyPatternsHintText: 'Etsi reittejä',
      searchStopsHintText: 'Etsi pysäkkejä'
    }
  },
  en: {}
};

class App extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      localisedStrings: new LocalizedStrings(localisation)
    };
    this.state.localisedStrings.setLanguage('fi');
  }

  render() {
    return (
      <div className="App">
        <Map/>
        <SearchBar localisedStrings={this.state.localisedStrings}/>
      </div>
    );
  }
}

export default App;