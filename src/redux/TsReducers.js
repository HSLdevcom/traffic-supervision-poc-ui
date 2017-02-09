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
 * All reducers API
 */
export { TsJourneyPatternReducers }