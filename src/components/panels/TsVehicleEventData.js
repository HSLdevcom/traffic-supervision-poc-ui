import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import '../../styles/panels/TsVehicleEventData.css'

class TsVehicleEventData extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.renderTableRows = this.renderTableRows.bind(this);
    this.getLocalizedEventDataType = this.getLocalizedEventDataType.bind(this);
  }

  renderTableRows() {
    var eventList = [];

    if (this.props.eventData !== undefined) {
      let id = 0;
      for (var key in this.props.eventData) {
        if (this.props.eventData.hasOwnProperty(key)){
          let keyName = this.getLocalizedEventDataType(key);
          eventList.push(
            <TableRow key={id++}>
              <TableRowColumn>
                {keyName}
              </TableRowColumn>
              <TableRowColumn>
                {this.props.eventData[key]}
              </TableRowColumn>
            </TableRow>
          );
        }
      }
    }
    return eventList;
  }

  getLocalizedEventDataType(type) {
    var typeLabel = "";

    typeLabel = this.props.localisedStrings.vehicleEvents.eventDataTypes[type];
    if (typeLabel === undefined) {
      typeLabel = type;
    }
    return typeLabel;
  }

  render() {
    var events = this.renderTableRows();

    return (
      <div className="TsVehicleEventData">
        <Table
          className="EventsDataTable">
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>
                Tapahtuman tiedot:
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}>
            {events}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TsVehicleEventData;
