import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Needed for localisation
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

it('renders without crashing', () => {
  let localisedStrings = new LocalizedStrings(localisation);
  localisedStrings.setLanguage('fi');
  const div = document.createElement('div');

  ReactDOM.render(<SearchBar localisedStrings={localisedStrings}/>, div);
});
