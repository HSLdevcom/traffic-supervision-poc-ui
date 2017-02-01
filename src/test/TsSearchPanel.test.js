import React from 'react';
import {shallow} from 'enzyme';
import TsSearchPanel from '../components/panels/TsSearchPanel';
// Needed for localisation
import LocalizedStrings from 'react-localization';
import { getLocalisation } from '../Localisation';

it('renders without crashing', () => {
  let localisedStrings = new LocalizedStrings(getLocalisation());
  localisedStrings.setLanguage('fi');

  expect(shallow(<TsSearchPanel localisedStrings={localisedStrings}/>)
    .find('.TsSearchPanel').length).toBe(1);
});
