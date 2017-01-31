import React from 'react';
import ReactDOM from 'react-dom';
import TsSearchBar from '../components/panels/TsSearchPanel';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Needed for localisation
import LocalizedStrings from 'react-localization';
const localisation = {
  fi: {
    journeyPattern: 'A',
    stop: 'B',
    searchPanel: {
      searchJourneyPatternsHintText: 'C',
      searchStopsHintText: 'D'
    }
  },
  en: {}
};

it('renders without crashing', () => {
  let localisedStrings = new LocalizedStrings(localisation);
  localisedStrings.setLanguage('fi');
  const div = document.createElement('div');

  ReactDOM.render(<TsSearchBar localisedStrings={localisedStrings}/>, div);
});
