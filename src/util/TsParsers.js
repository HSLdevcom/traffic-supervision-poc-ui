/**
 * Parser utils for the needs of UI
 */

const TsParserUtil = {
  uniqueArray: function(arrArg) {
    return arrArg.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) === pos;
    });
  }
};

/**
 * Journey pattern related parsers
 */
const TsJourneyPatternParsers = {

  /**
   * Parses descriptive string from journey pattern.
   */
  getJourneyPatternDescription: function(journeyPattern) {
    if (!journeyPattern.id) {
      return null;
    }
    return `${journeyPattern.line.designation}${journeyPattern.variant ? '_' + journeyPattern.variant : ''} ${journeyPattern.directionOfLine.description} (${journeyPattern.directionOfLine.direction})`;
  },

  /**
   * Parses descriptive string from visiting journey pattern.
   */
  getVisitingJourneyPatternDescription: function(journeyPattern) {
    if (!journeyPattern.id) {
      return null;
    }
    return `${journeyPattern.line.designation}${journeyPattern.variant ? '_' + journeyPattern.variant : ''} -> ${journeyPattern.directionOfLine.destination}`;
  },

  /**
   * Parses all other stops from links than of type 'VIA_POINT'
   * Returns array of stops.
   */
  linksToLinksStops: function(links) {
    let stops = [];
    links.forEach(function (link, index) {
      if (index === 0 && link.startStop && link.startStop.type !== 'VIA_POINT') {
        stops.push(link.startStop)
      } else if (index !== 0 && link.endStop && link.endStop.type !== 'VIA_POINT') {
        stops.push(link.endStop)
      }
    });
    return TsParserUtil.uniqueArray(stops);
  }
};

/**
 * Stop related parsers
 */
const TsStopParsers = {
  /**
   * Parses descriptive string from stop
   */
  getStopDescription: function (stop) {
    return `${stop.name} ${stop.shortCode? '(' + stop.shortCode + ')' : ''}`;
  },

  /**
   * Parses longer descriptive string from stop
   */
  getLongStopDescription: function (stop) {
    let stopCodes = '';
    if (stop.shortCode || stop.code) {
      stopCodes = ` (${stop.shortCode}, ${stop.code})`;
    }
    return `${stop.name}${stopCodes}`;
  }

};

export { TsJourneyPatternParsers, TsStopParsers };