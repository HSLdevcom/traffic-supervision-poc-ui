import React, {Component} from 'react';
import ol from "openlayers";
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
            url: 'https://api.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png'//todo; from config
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.transform([24.945831, 60.192059], 'EPSG:4326', 'EPSG:3857'),//todo; from config
        zoom: 12
      }),
      controls: [zoomControl]
    });
  }
}

export default TsMap;
