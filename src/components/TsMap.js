import React, {Component} from 'react';
import ol from 'openlayers';
import {TsConfiguration} from '../TsConfiguration'
import 'openlayers/css/ol.css';
import '../styles/TsMap.css';


class TsMap extends Component {

  render() {
    return (
      <div id="map" className="TsMap"/>
    );
  }

  componentDidMount() {
    const zoomControl = new ol.control.Zoom({ className: 'TsZoomControl' });
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            tileSize: [512, 512],
            url: TsConfiguration.map.baseMapUrl
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.transform(TsConfiguration.map.initialCenter, 'EPSG:4326', 'EPSG:3857'),
        zoom: 12
      }),
      controls: [zoomControl]
    });
  }
}

export default TsMap;
