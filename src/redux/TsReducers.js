/**
 * Reducers related to journey patterns
 */
const initialJourneyPatternsState = {
  selected: {
    journeyPattern: {},
    journeyPatternLinks: []
  }
};
const TsJourneyPatternReducers = function(state = initialJourneyPatternsState, action) {
  if (action.type === 'SET_SELECTED_JOURNEYPATTERN') {
    return Object.assign({}, state,
      { selected: {
          journeyPattern: action.journeyPattern,
          journeyPatternLinks: action.journeyPatternLinks
        }
      }
    )
  } else if (action.type === 'CLEAR_SELECTED_JOURNEYPATTERN') {
    return Object.assign({}, state,
      { selected: {
          journeyPattern: {},
          journeyPatternLinks: []
      }
      }
    )
  }
  return state;
};

/**
 * Reducers related to journeys
 */
const initialJourneyState = {
  selected: {
    journey: {},
  }
};
const TsJourneyReducers = function(state = initialJourneyState, action) {
  if (action.type === 'SET_SELECTED_JOURNEY') {
    return Object.assign({}, state,
      { selected: {
        journey: action.journey
      }
      }
    )
  } else if (action.type === 'CLEAR_SELECTED_JOURNEY') {
    return Object.assign({}, state,
      { selected: {
        journey: {}
      }
      }
    )
  }
  return state;
};

/**
 * Reducers related to stops
 */
const initialStopsState = {
  selected: {
    stop: {},
    stopVisits: []
  }
};
const TsStopReducers = function(state = initialStopsState, action) {
  if (action.type === 'SET_SELECTED_STOP') {
    return Object.assign({}, state,
      { selected: {
        stop: action.stop,
        stopVisits: action.stopVisits
      }
      }
    )
  } else if (action.type === 'CLEAR_SELECTED_STOP') {
    return Object.assign({}, state,
      { selected: {
        stop: {},
        stopVisits: []
      }
      }
    )
  }
  return state;
};

/**
 * Reducers related to vehicle
 */
const initialVehiclesState = {
  selected: {
    vehicleLocations: [],
    monitoredVehicle: {},
    vehicleLocationPoint: {}

  }
};
//todo; handle action state merges better
const TsVehicleReducers = function(state = initialVehiclesState, action) {
  if (action.type === 'SET_SELECTED_VEHICLE_LOCATIONS') {
    return Object.assign({}, state,
      { selected: {
        vehicleLocations: action.vehicleLocations,
//        monitoredVehicle: state.selected.monitoredVehicle
        }
      }
    )
  } else if (action.type === 'CLEAR_SELECTED_VEHICLE_LOCATIONS') {
    return Object.assign({}, state,
      { selected: {
        vehicleLocations: [],
//        monitoredVehicle: state.selected.monitoredVehicle
        }
      }
    )
  } else if (action.type === 'SET_SELECTED_MONITORED_VEHICLE') {
    return Object.assign({}, state,
      { selected: {
        monitoredVehicle: action.monitoredVehicle,
//        vehicleLocations: state.selected.vehicleLocations
        }
      }
    );
  } else if (action.type === 'SET_VEHICLE_LOCATION_POINT') {
    return Object.assign({}, state,
      { selected: {
        vehicleLocationPoint: action.vehicleLocationPoint
        }
      }
    );
  } else if (action.type === 'CLEAR_VEHICLE_LOCATION_POINT') {
    return Object.assign({}, state,
      { selected: {
        vehicleLocationPoint: {}
        }
      }
    );
  }

  return state;
};

/**
 * Reducers related to journey bulletins
 */
const initialJourneyBulletinsState = {
  journeyBulletins: {},
};

const TsJourneyBulletinsReducers = function(state = initialJourneyBulletinsState, action) {
  if (action.type === 'SHOW_JOURNEY_BULLETINS') {
    return Object.assign({}, state,
      {
        journeyBulletins: action.journeyBulletins
      }
    )
  } else if (action.type === 'HIDE_JOURNEY_BULLETINS') {
    return Object.assign({}, state,
      {
        journeyBulletins: {}
      }
    )
  }
  return state;
};

/**
 * Reducers related to journey deviations
 */
const initialJourneyDeviationState = {
  journeyDeviation: {}
};

const TsJourneyDeviationReducers = function(state = initialJourneyDeviationState, action) {
  if (action.type === 'SHOW_JOURNEY_DEVIATION') {
    return Object.assign({}, state,
      {
        journeyDeviation: action.journeyDeviation
      }
    )
  } else if (action.type === 'HIDE_JOURNEY_DEVIATION') {
    return Object.assign({}, state,
      {
        journeyDeviation: {}
      }
    )
  }
  return state;
};

/**
 * All reducers API
 */
export {
  TsJourneyPatternReducers,
  TsJourneyReducers,
  TsStopReducers,
  TsVehicleReducers,
  TsJourneyBulletinsReducers,
  TsJourneyDeviationReducers
}
