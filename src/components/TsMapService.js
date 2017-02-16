import ol from 'openlayers';
import moment from 'moment';
import "moment/locale/fi";
import {TsJourneyPatternParsers} from '../util/TsParsers';
import BusStopMarker from '../styles/icons/markers/bus_stop.svg'
import {TsConfiguration} from '../TsConfiguration'

/**
 * Map related utils
 */
const TsMapConvUtil = {

  converToBasemapProjection: function(location) {
    return ol.proj.transform([location.longitude, location.latitude], 'EPSG:4326', 'EPSG:3857');
  },

  /**
   * Journey pattern related utils
   */
  convertJourneyPatternLinkStopsToGeometryPoints: function(journeyPatternLinks) {

    return TsJourneyPatternParsers.linksToLinksStops(journeyPatternLinks).map(function(stop) {

      const geometryPoint = new ol.Feature({
        geometry: new ol.geom.Point(TsMapConvUtil.converToBasemapProjection(stop.location))
      });

      geometryPoint.setStyle([
        new ol.style.Style({// marker style
        image: new ol.style.Icon({
          src: BusStopMarker,
          scale: 0.35
        })
      }),
        new ol.style.Style({// marker label style
          text: new ol.style.Text({
            text: stop.name,
            font: 'normal 12px Rototo,sans-serif',
            offsetY: 15,
            stroke: new ol.style.Stroke({
              color: "white",
              width: 2
            })
          })
        })
      ]);

      return geometryPoint;
    });
  },

  convertJourneyPatternLinksToGeometryLineStrings: function(journeyPatternLinks) {

    return journeyPatternLinks.map(function(link) {

      const linkPoints = link.linkPoints.map(function(location) {
        return TsMapConvUtil.converToBasemapProjection(location);
      });
      linkPoints.splice(0, 0, TsMapConvUtil.converToBasemapProjection(link.startStop.location));
      linkPoints.push(TsMapConvUtil.converToBasemapProjection(link.endStop.location));

      const geometryLineString = new ol.Feature({
        geometry: new ol.geom.LineString(linkPoints)
      });

      geometryLineString.setStyle(new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: TsConfiguration.map.journeyPattern.linkColor,
          width: TsConfiguration.map.journeyPattern.linkLineWidth
        })
      }));

      return geometryLineString;
    });
  },

  /**
   * Vehicle location related utils
   */

  convertVehicleLocationsToGeometryLineStrings: function(vehicleLocations) {
    return vehicleLocations.map(function(part) {
      const journeyPoints = part.map(function(location) {
        return TsMapConvUtil.converToBasemapProjection(location);
      });

      const geometryLineString = new ol.Feature({
        geometry: new ol.geom.LineString(journeyPoints)
      });

      geometryLineString.setStyle(
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: TsConfiguration.map.vehicleLocation.linkColor,
            width: TsConfiguration.map.vehicleLocation.linkLineWidth
          })
      }));
      return geometryLineString;
    });
  },

  convertLocationToGeometryPointText: function(location) {
    let textStyle = new ol.style.Style({
      text: new ol.style.Text({
        text: moment(location.timestamp).format("HH:mm"),
        font: 'bold 12px Rototo,sans-serif',
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 3 }),
        offsetX: -30
      }),
    });

    const textFeature = new ol.Feature({
      geometry: new ol.geom.Point(TsMapConvUtil.converToBasemapProjection(location))
    });
    textFeature.setStyle(textStyle);

    return textFeature;
  },

  convertVehicleLocationsToGeometryPointText: function(vehicleLocations) {
    return vehicleLocations.map(function(locations) {
      return [TsMapConvUtil.convertLocationToGeometryPointText(locations[0]),
        TsMapConvUtil.convertLocationToGeometryPointText(locations[locations.length - 1])];
    });
  },

  convertVehicleLocationsToGeometryFeatures: function(vehicleLocations) {
    let features = TsMapConvUtil.convertVehicleLocationsToGeometryLineStrings(vehicleLocations);
    let labels = TsMapConvUtil.convertVehicleLocationsToGeometryPointText(vehicleLocations);
    labels.forEach(function(point) {
      features = features.concat(point[0]);
      features = features.concat(point[1]);
    });

    return features;
  }
};

/**
 * Wrapper around openlayers 3
 */
class TsMapService {

  constructor() {
    this.zoomControl = new ol.control.Zoom({ className: 'TsZoomControl' });
    this.baseMapLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        tileSize: [512, 512],
        url: TsConfiguration.map.baseMapUrl
      })
    });
    this.journeyPatternLineLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      zIndex: 30
    });
    this.vehicleJourneyLocationLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      zIndex: 40
    });
    this.journeyPatternStopLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      zIndex: 50
    });
    this.view = new ol.View({
      center: TsMapConvUtil.converToBasemapProjection(TsConfiguration.map.initialCenter),
      zoom: 13
    });
  };

  initMap(mapTargetTag) {
    this.map = new ol.Map({
      target: mapTargetTag,
      layers: [
        this.baseMapLayer,
        this.journeyPatternLineLayer,
        this.vehicleJourneyLocationLayer,
        this.journeyPatternStopLayer
      ],
      view: this.view,
      controls: [this.zoomControl]
    });
  };

  setFeatures(layer, features) {
    if (!features || features.length === 0) {
      layer.getSource().clear();
    } else {
      layer.getSource().addFeatures(features);
    }
  }
}

export default TsMapService;
export { TsMapConvUtil };
