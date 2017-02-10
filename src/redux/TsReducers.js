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
 * All reducers API
 */
export { TsJourneyPatternReducers, TsStopReducers }