import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TsVehicleActions} from '../../redux/TsActions';
import '../../styles/panels/TsGraphPanel.css';
import {Line} from 'react-chartjs-2';

class TsGraphPanel extends Component {
  constructor() {
    super();
    this.state = {
      speedData : [],
      timeLabels : [],
      locationData: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedVehicleLocations !== undefined) {
      this.createGraphData(nextProps.selectedVehicleLocations);
    }
  };

  createGraphData(selectedLocations) {
    var data = [];
    var labels = [];
    var locationData = [];

    for (let lc = 0; lc < selectedLocations.length; lc++) {
      let locations = selectedLocations[lc];
      if (lc !== 0) {
        labels.push(locations[0].timestamp);
        data.push(0);
        locationData.push(locations[0]);
      }
      locations.forEach(function(location) {
        labels.push(location.timestamp);
        data.push(location.speed);
        locationData.push(location);
      });
      if (lc !== selectedLocations.length - 1) {
        let last = locations.pop();
        labels.push(last.timestamp);
        data.push(0);
        locationData.push(last);
      }
    }

    this.state = {
      speedData : data,
      timeLabels : labels,
      locationData : locationData
    };
  };

  render() {
    if (this.state.timeLabels.length === 0) {
      return null;
    }

    const data = {
      labels: this.state.timeLabels,
      datasets: [
        {
          label: this.props.localisedStrings.vehicleGraph.titleSpeed,
          spanGaps: false,
          lineTension: 0,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          fill: true,
          data: this.state.speedData
        },
      ]
    };

    const options = {
      maintainAspectRatio: false,
      hover: {
        onHover: (event, active) => {
          if (active !== undefined && active.length > 0) {
            this.props.dispatch(
              TsVehicleActions.setVehicleLocationPoint(
                this.state.locationData[active[0]._index]));
          } else {
            this.props.dispatch(TsVehicleActions.clearVehicleLocationPoint());
          }
        }
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              minute: 'HH:mm:ss'
            }
          }
        }]
      }
    };

    return (
      <div className="TsGraphPanel">
        <Line data={data} options={options} height={300}/>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    selectedVehicleLocations: store.vehiclesState.selected.vehicleLocations
  };
};

export default connect(mapStateToProps)(TsGraphPanel);
