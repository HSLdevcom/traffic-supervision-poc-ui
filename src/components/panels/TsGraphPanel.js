import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TsVehicleActions} from '../../redux/TsActions';
import moment from 'moment';
import "moment/locale/fi";
import {Chart, Line} from 'react-chartjs-2';
import '../../styles/panels/TsGraphPanel.css';

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "zoomPlugin" }]*/
import {zoomPlugin} from 'chartjs-plugin-zoom';

Chart.defaults.global.defaultFontColor = 'rgba(93,93,93,1)';
Chart.defaults.global.defaultFontFamily = 'Rototo,sans-serif';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontStyle = 'normal';

const linePointerColor = "#EC407A";

// Used for storing current mouse X-coordinate so that the line pointer
// can be drawn to right position on the graph. Update from onHover callback.
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
      afterDraw: function (chart) {
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
        labels.push(moment(locations[0].timestamp));
        data.push(0);
        locationData.push(locations[0]);
      }
      locations.forEach(function(location) {
        labels.push(moment(location.timestamp));
        data.push(location.speed);
        locationData.push(location);
      });
      if (lc !== selectedLocations.length - 1) {
        let last = locations.pop();
        labels.push(moment(last.timestamp));
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
          borderWidth: 1,
          backgroundColor: 'rgba(38,198,218,0.4)',
          borderColor: 'rgba(0,184,212,1)',
          pointRadius: 2,
          pointHoverBackgroundColor: "rgba(244,143,177,1)",
          pointHoverBorderColor: "#EC407A",
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
          mouseX = event.offsetX;
        }
      },
      legend:{
       display:false
      },
      scales: {
        xAxes: [{
          gridLines: {
            lineWidth: 1,
            color: "rgba(238,238,238,1)"
          },
          type: 'time',
          time: {
            format: 'HH:mm:ss',
            displayFormats: {
              minute: 'HH:mm:ss',
              second: 'HH:mm:ss',
              millisecond: 'HH:mm:ss'
            }
          },
          ticks: {
            maxRotation: 0
          }
        }],
        yAxes: [{
          gridLines: {
            lineWidth: 1,
            color: "rgba(238,238,238,1)"
          },
        }]
      },
      pan: {
        enabled: true,
        mode: 'x'
      },
      zoom: {
        enabled: true,
        mode: 'x',
      }
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
