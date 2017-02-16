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
 * Actions related to vehicle
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

const TsVehicleActions = {
  setSelectedVehicleLocations: setSelectedVehicleLocations,
  clearSelectedVehicleLocations: clearSelectedVehicleLocations
};

/**
 * Actions related to journey bulletins
 */
const showJourneyBulletins = function(bulletins) {
  return {
    type: 'SHOW_JOURNEY_BULLETINS',
    journeyBulletins: bulletins
  }
};

const hideJourneyBulletins = function() {
  return {
    type: 'HIDE_JOURNEY_BULLETINS'
  }
};

const TsJourneyBulletinsActions = {
  showJourneyBulletins: showJourneyBulletins,
  hideJourneyBulletins: hideJourneyBulletins
};

/**
 * Actions related to journey deviations
 */
const showJourneyDeviation = function(deviation) {
  return {
    type: 'SHOW_JOURNEY_DEVIATION',
    journeyDeviation: deviation
  }
};

const hideJourneyDeviation = function() {
  return {
    type: 'HIDE_JOURNEY_DEVIATION'
  }
};

const TsJourneyDeviationActions = {
  showJourneyDeviation: showJourneyDeviation,
  hideJourneyDeviation: hideJourneyDeviation
};

/**
 * All actions API
 */
export {
  TsJourneyPatternActions,
  TsJourneyActions,
  TsStopActions,
  TsVehicleActions,
  TsJourneyBulletinsActions,
  TsJourneyDeviationActions
}
