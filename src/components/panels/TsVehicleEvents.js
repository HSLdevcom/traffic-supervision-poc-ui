import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import moment from 'moment';
import "moment/locale/fi";
import '../../styles/panels/RightSide.css';
import '../../styles/panels/TsVehicleEvents.css'
import {DummyVehicleEvents} from '../../dummydata/VehicleEvents.js'

const tableTimeColumnStyle = {
  width: '50px',
};

class TsVehicleEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signOnChecked: true,
      ticketingChecked: true,
      busFullChecked: true,
      stopChecked: true,
      doorChecked: true,
      tlpChecked: true
    }
    this.getLocalizedSubType = this.getLocalizedSubType.bind(this);
    this.renderTableRows = this.renderTableRows.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  getLocalizedSubType(subtype) {
    var subtypeLabel = "";

    subtypeLabel = this.props.localisedStrings.vehicleEvents.subtypes[subtype];
    if (subtypeLabel === undefined) {
      subtypeLabel = subtype;
    }
    return subtypeLabel;
  }

  isFiltered(type) {
    let filtered = false;

    if ((type === 'SIGNON' && this.state.signOnChecked === false) ||
      (type === 'DOOR' && this.state.doorChecked === false) ||
      (type === 'TICKETING' && this.state.ticketingChecked === false) ||
      (type === 'STOP' && this.state.stopChecked === false) ||
      (type === 'TLP' && this.state.tlpChecked === false) ||
      (type === 'BUS_FULL' && this.state.busFullChecked === false)) {
      filtered = true;
    }
    return filtered;
  }

  renderTableRows() {
    return DummyVehicleEvents.map((event) => {
      if (this.isFiltered(event['type'])) {
        return null;
      }
      var subtype = this.getLocalizedSubType(event['subtype']);
      return (
       <TableRow key={event['id']}>
         <TableRowColumn style={tableTimeColumnStyle}>
           {moment(event['timestamp']).format('HH:mm:ss')}
         </TableRowColumn>
         <TableRowColumn>
           {subtype}
         </TableRowColumn>
       </TableRow>
       )
    }, this);
  }

  handleFilterChecked(filter, event, isInputChecked) {
    let state = {};
    state[filter] = isInputChecked;
    this.setState(state);
  }

  render() {
    var events = this.renderTableRows();

    return (
      <div className="TsVehicleEvents">
        <div className="CheckboxesLeft">
          <Checkbox
            label={this.props.localisedStrings.vehicleEvents.types.signOn}
            checked={this.state.signOnChecked}
            onCheck={this.handleFilterChecked.bind(this, 'signOnChecked')}
          />
          <Checkbox
            label={this.props.localisedStrings.vehicleEvents.types.ticketing}
            checked={this.state.ticketingChecked}
            onCheck={this.handleFilterChecked.bind(this, 'ticketingChecked')}
          />
          <Checkbox
            label={this.props.localisedStrings.vehicleEvents.types.busFull}
            checked={this.state.busFullChecked}
            onCheck={this.handleFilterChecked.bind(this, 'busFullChecked')}
          />
        </div>
        <div className="CheckboxesRight">
          <Checkbox
            label={this.props.localisedStrings.vehicleEvents.types.stop}
            checked={this.state.stopChecked}
            onCheck={this.handleFilterChecked.bind(this, 'stopChecked')}
          />
          <Checkbox
            label={this.props.localisedStrings.vehicleEvents.types.door}
            checked={this.state.doorChecked}
            onCheck={this.handleFilterChecked.bind(this, 'doorChecked')}
          />
          <Checkbox
            label={this.props.localisedStrings.vehicleEvents.types.tlp}
            checked={this.state.tlpChecked}
            onCheck={this.handleFilterChecked.bind(this, 'tlpChecked')}
          />
        </div>
        <div className="EventsTable">
          <Table>
            <TableHeader
              adjustForCheckbox={false}
              displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={tableTimeColumnStyle}>{this.props.localisedStrings.vehicleEvents.timeLabel}</TableHeaderColumn>
                <TableHeaderColumn>{this.props.localisedStrings.vehicleEvents.eventLabel}</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}>
              {events}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TsVehicleEvents;
