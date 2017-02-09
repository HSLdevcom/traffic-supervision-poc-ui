import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import "moment/locale/fi";
import {DummyOperators} from '../../dummydata/Operators.js'
import '../../styles/panels/TsVehicleDataSearch.css';

export default class TsVehicleDataSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOperator: "",
      selectedVehicleId: "",
      timeStart: "",
      timeStop: "",
      timeStartValid: false,
      timeStopValid: false,
      searchButtonDisabled: true
    };

    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleVehicleIdChange = this.handleVehicleIdChange.bind(this);
    this.handleTimeStartChange = this.handleTimeStartChange.bind(this);
    this.handleTimeStopChange = this.handleTimeStopChange.bind(this);
  }

  handleOperatorChange(event) {
    this.setState({selectedOperator: event.target.value});
  }

  handleVehicleIdChange(event) {
    if(!isNaN(event.target.value)) {
      this.setState({selectedVehicleId: event.target.value});
    } else {
      if (event.target.value.length === 1) {
        this.setState({selectedVehicleId: ""});
      }
    }
  }

  handleTimeStartChange(event) {
    let startTime = moment(event.target.value, "HH:mm", true);
    if (startTime.isValid()) {
      this.setState({timeStartValid: true});
    } else {
      this.setState({timeStartValid: false});
    }
    this.setState({timeStart: event.target.value});
  }

  handleTimeStopChange(event) {
    let stopTime = moment(event.target.value, "HH:mm", true);
    if (stopTime.isValid()) {
      this.setState({timeStopValid: true})
    } else {
      this.setState({timeStopValid: false});
    }
    this.setState({timeStop: event.target.value});
  }

  handleSubmit(event) {
    console.log("Submitting my search!");
    event.preventDefault();
  }

  render() {
    var options = DummyOperators.map(function(operator) {
     return (
         <option key={operator['id']} value={operator['id']}>
             {operator['name']}
         </option>
     )
    });

    return (
      <div className="TsVehicleDataSearch">
        <form onSubmit={this.handleSubmit}>
          <table className="VehicleSearchTable">
            <tbody>
              <tr>
                <td width="30%" className="VehicleSearchTableCol">
                  {this.props.localisedStrings.vehicleDataSearch.operatorLabel}:
                </td>
                <td colSpan="4" className="VehicleSearchTableCol">
                  <select id={this.props.id}
                    className="OperatorDropdown"
                    value={this.state.selectedOperator}
                    onChange={this.handleOperatorChange}>
                    {options}
                  </select>
                </td>
              </tr>
              <tr>
                <td width="30%" className="VehicleSearchTableCol">
                  {this.props.localisedStrings.vehicleDataSearch.vehicleLabel}:
                </td>
                <td colSpan="4" className="VehicleSearchTableCol">
                  <input
                    type="text"
                    name="vehicleId"
                    value={this.state.selectedVehicleId}
                    onChange={this.handleVehicleIdChange}
                    size="4"/>
                </td>
              </tr>
              <tr>
                <td width="30%" className="VehicleSearchTableCol">
                  {this.props.localisedStrings.vehicleDataSearch.timespanLabel}:
                </td>
                <td width="12%" className="VehicleSearchTableCol">
                  <input
                    className="TimeInput"
                    type="text"
                    name="timeStart"
                    value={this.state.timeStart}
                    onChange={this.handleTimeStartChange}
                    size="4"/>
                  </td>
                <td width="5%" className="VehicleSearchTableCol">
                  <label className="BetweenTimes"/>-
                </td>
                <td width="12%" className="VehicleSearchTableCol">
                  <input
                    className="TimeInput"
                    type="text"
                    name="timeStop"
                    value={this.state.timeStop}
                    onChange={this.handleTimeStopChange}
                    size="4"/>
                </td>
                <td className="VehicleSearchTableCol">
                  <RaisedButton
                    disabled={!(this.state.selectedVehicleId !== "" && this.state.timeStartValid === true && this.state.timeStopValid === true)}
                    className="SearchButton"
                    type="submit"
                    label={this.props.localisedStrings.vehicleDataSearch.searchButtonTittle}
                    primary={true}
                    style={{height: '21px', float: 'right'}}/>
                </td>
              </tr>
              <tr>
                <td colSpan="5" className="VehicleSearchTableCol">
                  <label className="VehicleInformation">
                    {this.props.localisedStrings.vehicleDataSearch.vehicleInfoLabel}: ABC-213, 5v, C, runkolinja
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
