import React from 'react';
import ReactDOM from 'react-dom';
import TsApp from './components/TsApp';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {TsJourneyPatternReducers} from './redux/reducers'
import './styles/index.css';

const reducers = combineReducers({
  journeyPatternsState: TsJourneyPatternReducers
});
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <TsApp />
  </Provider>,
  document.getElementById('root')
);
