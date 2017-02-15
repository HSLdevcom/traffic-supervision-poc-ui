import moment from 'moment';
import "moment/locale/fi";

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

/**
 * Time related parsers
 */
const TsTimeParsers = {
  /**
   * Parses time difference from two times
   */
  getTimeDifferenceLabel(planned, actual, showSeconds) {
    let label = moment(actual).format(showSeconds ? 'HH:mm:ss':'HH:mm');
    let differenceSeconds = moment(actual).diff(planned, 'seconds');
    let differenceMinutes = parseInt(differenceSeconds / 60, 10);
    let min = "";
    let sec = "";

    differenceSeconds -= differenceMinutes * 60;
    if (differenceSeconds < 0) differenceSeconds *= -1;
    sec = ("0" + differenceSeconds.toString()).slice(-2);

    if (differenceMinutes < 0) {
      differenceMinutes *= -1;
      min = "-" + ("0" + differenceMinutes.toString()).slice(-2);
    } else {
      min = "+" + ("0" + differenceMinutes.toString()).slice(-2);
    }
    label += " (" + min + ":" + sec + ")";

    return label;
  }
};

export { TsJourneyPatternParsers, TsStopParsers, TsTimeParsers };