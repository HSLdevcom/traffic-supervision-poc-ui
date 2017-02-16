import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsMapService, {TsMapConvUtil} from './TsMapService';
import 'openlayers/css/ol.css';
import '../styles/TsMap.css';


class TsMap extends Component {
  constructor(props) {
    super(props);
    this.map = new TsMapService();
  };

  componentDidMount() {
    this.map.initMap('map');
  };

  render() {
    this.map.setFeatures(
      this.map.journeyPatternLineLayer,
      TsMapConvUtil.convertJourneyPatternLinksToGeometryLineStrings(
        this.props.selected.journeyPatternLinks));

    this.map.setFeatures(
      this.map.vehicleJourneyLocationLayer,
      TsMapConvUtil.convertVehicleLocationsToGeometryFeatures(
        this.props.selectedVehicleLocations));

    this.map.setFeatures(
      this.map.journeyPatternStopLayer,
      TsMapConvUtil.convertJourneyPatternLinkStopsToGeometryPoints(
        this.props.selected.journeyPatternLinks));

    return (
      <div id="map" className="TsMap"/>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selected: store.journeyPatternsState.selected,
    selectedVehicleLocations: store.vehiclesState.selected.vehicleLocations
  };
};
export default connect(mapStateToProps)(TsMap);
