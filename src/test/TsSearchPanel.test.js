import React from 'react';
import ReactDOM from 'react-dom';
import TsSearchBar from '../components/panels/TsSearchPanel';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Needed for localisation
import LocalizedStrings from 'react-localization';
import { getLocalisation } from '../Localisation';

it('renders without crashing', () => {
  let localisedStrings = new LocalizedStrings(getLocalisation());
  localisedStrings.setLanguage('fi');
  const div = document.createElement('div');

  ReactDOM.render(<TsSearchBar localisedStrings={localisedStrings}/>, div);
});
