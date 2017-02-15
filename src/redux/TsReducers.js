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
 * Reducers related to vehicle location
 */
const initialVehicleLocationState = {
  selected: {
    vehicleLocations: []
  }
};
const TsVechicleLocationReducers = function(state = initialVehicleLocationState, action) {
  if (action.type === 'SET_SELECTED_VEHICLE_LOCATIONS') {
    return Object.assign({}, state,
      { selected: {
        vehicleLocations: action.vehicleLocations
      }
      }
    )
  } else if (action.type === 'CLEAR_SELECTED_VEHICLE_LOCATIONS') {
    return Object.assign({}, state,
      { selected: {
        vehicleLocations: []
      }
      }
    )
  }

  return state;
};

/**
 * All reducers API
 */
export { TsJourneyPatternReducers, TsJourneyReducers, TsStopReducers, TsVechicleLocationReducers }
