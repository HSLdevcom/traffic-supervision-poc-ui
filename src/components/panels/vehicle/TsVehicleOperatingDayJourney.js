import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {TsJourneyActions} from '../../../redux/TsActions'
import {TsTimeParsers} from '../../../util/TsParsers';
import moment from 'moment';
import "moment/locale/fi";
import '../../../styles/panels/RightSide.css';
import '../../../styles/panels/vehicle/TsVehicleOperatingDayJourney.css';

import {DummyJourneyData} from '../../../dummydata/JourneyData'; //todo; replace with real data fetched from backend

class TsVehicleOperatingDayJourney extends Component {

  handleClicked(id) {
    this.props.dispatch(TsJourneyActions.setSelectedJourney(DummyJourneyData));
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

  render() {
    var buttonLabel = this.getButtonLabel();
    var startTimeDiff = TsTimeParsers.getTimeDifferenceLabel(
      this.props.data['plannedStartTime'],
      this.props.data['actualStartTime']
    );
    var endTimeDiff = TsTimeParsers.getTimeDifferenceLabel(
      this.props.data['plannedEndTime'],
      this.props.data['actualEndTime']
    );

    return (
      <div className="TsVehicleOperatingDayJourney">
        <RaisedButton
          style={{height:20}}
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

export default connect()(TsVehicleOperatingDayJourney);
