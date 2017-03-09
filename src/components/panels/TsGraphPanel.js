import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TsVehicleActions} from '../../redux/TsActions';
import '../../styles/panels/TsGraphPanel.css';
import {Chart, Line} from 'react-chartjs-2';

const linePointerColor = "#EC407A";

var mouseX = 0;

var parentEventHandler = Chart.Controller.prototype.eventHandler;
Chart.Controller.prototype.eventHandler = function() {
  var ret = parentEventHandler.apply(this, arguments);

  this.clear();
  this.draw();

  var yScale = this.scales['y-axis-0'];

  this.chart.ctx.beginPath();
  this.chart.ctx.moveTo(arguments[0].x, yScale.getPixelForValue(yScale.max));
  this.chart.ctx.strokeStyle = linePointerColor;
  this.chart.ctx.lineTo(arguments[0].x, yScale.getPixelForValue(yScale.min));
  this.chart.ctx.stroke();

  return ret;
};

class TsGraphPanel extends Component {

  constructor() {
    super();
    this.state = {
      speedData : [],
      timeLabels : [],
      locationData : []
    };
  }

  componentWillMount() {
    Chart.pluginService.register({
      afterDraw: function (chart, easing) {
        if (chart === undefined) {
          return;
        }
        var ctx = chart.chart.canvas.getContext("2d");
        var yScale = chart.scales['y-axis-0'];

        ctx.beginPath();
        ctx.moveTo(mouseX, yScale.getPixelForValue(yScale.max));
        ctx.strokeStyle = linePointerColor;
        ctx.lineTo(mouseX, yScale.getPixelForValue(yScale.min));
        ctx.stroke();
      }
    });
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

    this.setState({
      speedData : data,
      timeLabels : labels,
      locationData : locationData
    });
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
      ],
    };

    const options = {
      maintainAspectRatio: false,
      hover: {
        mode: 'x',
        intersect: false,
        onHover: (event, active) => {
          if (active !== undefined && active.length > 0) {
            this.props.dispatch(
              TsVehicleActions.setVehicleLocationPoint(
                this.state.locationData[active[0]._index]));
          } else {
            this.props.dispatch(TsVehicleActions.clearVehicleLocationPoint());
          }

          mouseX = event.x - 405;
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
      },
    };

    return (
      <div className="TsGraphPanel">
        <Line ref='chart' data={data} options={options} height={300}/>
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
