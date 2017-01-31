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
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.transform([24.945831, 60.192059], 'EPSG:4326', 'EPSG:3857'),
        zoom: 12
      }),
      controls: []
    });
  }
}

export default TsMap;
