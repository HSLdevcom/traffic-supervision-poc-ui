/**
 * Actions related to journey patterns
 */
const setSelectedJourneyPattern = function(journeyPattern, journeyPatternLinks) {
  return {
    type: 'SET_SELECTED_JOURNEYPATTERN',
    journeyPattern: journeyPattern,
    journeyPatternLinks: journeyPatternLinks
  }
};

const clearSelectedJourneyPattern = function() {
  return {
    type: 'CLEAR_SELECTED_JOURNEYPATTERN'
  }
};

const TsJourneyPatternActions = {
  setSelectedJourneyPattern: setSelectedJourneyPattern,
  clearSelectedJourneyPattern: clearSelectedJourneyPattern
};


/**
 * All actions API
 */
export { TsJourneyPatternActions }