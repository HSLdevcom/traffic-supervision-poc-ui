import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsMapService, {TsMapConvUtil} from './TsMapService';
import 'openlayers/css/ol.css';
import '../styles/TsMap.css';


class TsMap extends Component {
  constructor(props) {
    super(props);
    this.map = new TsMapService();
    this.state = {
      journeyPatternLinksUpdated : false,
      vehicleLocationsUpdated : false,
      vehicleLocationPointUpdated : false
    }
    this.selectedJourneyPatternLinks = [];
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      journeyPatternLinksUpdated: (nextProps.selectedJourneyPatternLinks.length !== this.selectedJourneyPatternLinks.length),
      vehicleLocationsUpdated: (nextProps.selectedVehicleLocations !== undefined),
      vehicleLocationPointUpdated: (nextProps.selectedVehicleLocationPoint !== undefined)
    });
    if (nextProps.selectedJourneyPatternLinks.length !== this.selectedJourneyPatternLinks.length) {
      this.selectedJourneyPatternLinks = nextProps.selectedJourneyPatternLinks;
    }
  };

  componentDidMount() {
    this.map.initMap('map');
  };

  render() {
    if (this.state.journeyPatternLinksUpdated) {
      this.map.setFeatures(
        this.map.journeyPatternLineLayer,
        TsMapConvUtil.convertJourneyPatternLinksToGeometryLineStrings(
          this.props.selectedJourneyPatternLinks));

      this.map.setFeatures(
        this.map.journeyPatternStopLayer,
        TsMapConvUtil.convertJourneyPatternLinkStopsToGeometryPoints(
          this.props.selectedJourneyPatternLinks));
    }

    if (this.state.vehicleLocationsUpdated) {
      if (this.props.selectedVehicleLocations !== undefined &&
          this.props.selectedVehicleLocations.length > 0) {
        this.map.setFeatures(
          this.map.vehicleJourneyLocationLayer,
          TsMapConvUtil.convertVehicleLocationsToGeometryFeatures(
            this.props.selectedVehicleLocations));
      }
    }

    if (this.state.vehicleLocationPointUpdated) {
      if (this.props.selectedVehicleLocationPoint !== undefined) {
        this.map.vehicleJourneyLocationPointLayer.getSource().clear();
        this.map.setFeatures(
          this.map.vehicleJourneyLocationPointLayer,
          TsMapConvUtil.convertVehicleLocationPointToGeometryFeatures(
            this.props.selectedVehicleLocationPoint));
      }
    }

    return (
      <div id="map" className="TsMap"/>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selectedJourneyPatternLinks: store.journeyPatternsState.selected.journeyPatternLinks,
    selectedVehicleLocations: store.vehiclesState.selected.vehicleLocations,
    selectedVehicleLocationPoint: store.vehiclesState.selected.vehicleLocationPoint
  };
};
export default connect(mapStateToProps)(TsMap);
