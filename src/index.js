import React from 'react';
import ReactDOM from 'react-dom';
import TsApp from './components/TsApp';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {TsJourneyPatternReducers,
        TsJourneyReducers,
        TsStopReducers,
        TsVehicleReducers,
        TsJourneyBulletinsReducers,
        TsJourneyDeviationReducers} from './redux/TsReducers'
import './styles/index.css';

const reducers = combineReducers({
  journeyPatternsState: TsJourneyPatternReducers,
  journeysState: TsJourneyReducers,
  stopsState: TsStopReducers,
  vehiclesState: TsVehicleReducers,
  journeyBulletinsState: TsJourneyBulletinsReducers,
  journeyDeviationState: TsJourneyDeviationReducers,
});
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <TsApp />
  </Provider>,
  document.getElementById('root')
);
