import ol from 'openlayers';
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
          scale: 0.5
        })
      }),
        new ol.style.Style({// marker label style
          text: new ol.style.Text({
            text: stop.name,
            fontFamily: 'Rototo,sans-serif',
            offsetY: 25,
            scale: 1.5,
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

  convertJourneyPatternToGeometryFeatures: function(journeyPatternLinks) {

    return TsMapConvUtil.convertJourneyPatternLinkStopsToGeometryPoints(journeyPatternLinks).concat(
      TsMapConvUtil.convertJourneyPatternLinksToGeometryLineStrings(journeyPatternLinks));
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
    this.featureLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      zIndex: 30
    });
    this.view = new ol.View({
      center: TsMapConvUtil.converToBasemapProjection(TsConfiguration.map.initialCenter),
      zoom: 12
    });
  };

  initMap(mapTargetTag) {
    this.map = new ol.Map({
      target: mapTargetTag,
      layers: [
        this.baseMapLayer,
        this.featureLayer
      ],
      view: this.view,
      controls: [this.zoomControl]
    });
  };

  setFeatures(features) {
    if (!features || features.length === 0) {
      this.featureLayer.getSource().clear();
    } else {
      this.featureLayer.getSource().addFeatures(features);
    }
  }
}

export default TsMapService;
export { TsMapConvUtil };