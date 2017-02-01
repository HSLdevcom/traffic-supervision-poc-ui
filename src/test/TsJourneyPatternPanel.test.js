import React from 'react';
import {shallow} from 'enzyme';
import TsJourneyPatternPanel from '../components/panels/TsJourneyPatternPanel'
// Needed for localisation
import LocalizedStrings from 'react-localization';
import { getLocalisation } from '../TsLocalisation';

it('renders without crashing', () => {
  let localisedStrings = new LocalizedStrings(getLocalisation());
  localisedStrings.setLanguage('fi');

  expect(shallow(<TsJourneyPatternPanel localisedStrings={localisedStrings}/>)
    .find('.TsJourneyPatternPanel').length).toBe(1);
});
