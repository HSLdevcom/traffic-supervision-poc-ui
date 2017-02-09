import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import "moment/locale/fi";
import '../../styles/panels/RightSide.css';
import '../../styles/panels/TsVehicleOperatingDayJourney.css';

class TsVehicleOperatingDayJourney extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClicked(id) {
    console.log(this.props.data);
    console.log("Link clicked: " + id);
  }

  getButtonLabel() {
    let plannedStartTime = moment(this.props.data['plannedStartTime']);
    let plannedEndTime = moment(this.props.data['plannedEndTime']);

    var label =
      this.props.data['line'].designation + "/" +
      this.props.data['directionOfLine'].direction + " " +
      plannedStartTime.format('HH:mm') + " - " +
      plannedEndTime.format('HH:mm');

    return label;
  }

  getTimeDifferenceLabel(planned, actual) {
    var label = moment(actual).format('HH:mm');
    var differenceSeconds = moment(planned).diff(actual, 'seconds');
    var differenceMinutes = parseInt(differenceSeconds / 60, 10);

    differenceSeconds -= differenceMinutes * 60;
    if(differenceSeconds < 0) differenceSeconds *= -1;

    label += " (" + differenceMinutes + "." + differenceSeconds + ")";
    return label;
  }

  render() {
    var buttonLabel = this.getButtonLabel();
    var startTimeDiff = this.getTimeDifferenceLabel(
      this.props.data['plannedStartTime'],
      this.props.data['actualStartTime']
    );
    var endTimeDiff = this.getTimeDifferenceLabel(
      this.props.data['plannedEndTime'],
      this.props.data['actualEndTime']
    );

    return (
      <div className="TsVehicleOperatingDayJourney">
        <RaisedButton
          label={buttonLabel}
          primary={true}
          onClick={() => this.handleClicked(this.props.data['id'])}/>
        <div>
          <label>{startTimeDiff}</label>
          <label>{endTimeDiff}</label>
        </div>
      </div>
    );
  }
}

export default TsVehicleOperatingDayJourney;
