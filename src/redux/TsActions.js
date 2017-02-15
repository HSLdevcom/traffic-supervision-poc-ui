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
 * Actions related to journeys
 */
const setSelectedJourney = function(journey) {
  return {
    type: 'SET_SELECTED_JOURNEY',
    journey: journey
  }
};

const clearSelectedJourney = function() {
  return {
    type: 'CLEAR_SELECTED_JOURNEY'
  }
};

const TsJourneyActions = {
  setSelectedJourney: setSelectedJourney,
  clearSelectedJourney: clearSelectedJourney
};

/**
 * Actions related to stops
 */
const setSelectedStop = function(stop, stopVisits) {
  return {
    type: 'SET_SELECTED_STOP',
    stop: stop,
    stopVisits: stopVisits
  }
};

const clearSelectedStop = function() {
  return {
    type: 'CLEAR_SELECTED_STOP'
  }
};

const TsStopActions = {
  setSelectedStop: setSelectedStop,
  clearSelectedStop: clearSelectedStop
};

/**
 * Actions related to vehicle location
 */
const setSelectedVehicleLocations = function(vehicleLocations) {
  return {
    type: 'SET_SELECTED_VEHICLE_LOCATIONS',
    vehicleLocations: vehicleLocations
  }
};

const clearSelectedVehicleLocations = function() {
  return {
    type: 'CLEAR_SELECTED_VEHICLE_LOCATIONS'
  }
};

const TsVehicleLocationActions = {
  setSelectedVehicleLocations: setSelectedVehicleLocations,
  clearSelectedVehicleLocations: clearSelectedVehicleLocations
};

/**
 * All actions API
 */
export { TsJourneyPatternActions, TsJourneyActions, TsStopActions, TsVehicleLocationActions }
