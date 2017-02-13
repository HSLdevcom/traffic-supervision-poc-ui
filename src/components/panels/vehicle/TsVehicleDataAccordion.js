import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TsVehicleOperatingDayJourneys from './TsVehicleOperatingDayJourneys.js'
import TsVehicleEvents from './TsVehicleEvents.js'
import '../../../styles/panels/RightSide.css';
import '../../../styles/panels/vehicle/TsVehicleDataAccordion.css'

class TsVehicleDataAccordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      operatingDayJorneysExpanded : true,
      eventsExpanded : false
    }

    this.operatingDayJourneyExpanseChange = this.operatingDayJourneyExpanseChange.bind(this);
    this.eventsExpanseChange = this.eventsExpanseChange.bind(this);
  }

  operatingDayJourneyExpanseChange(e) {
    this.setState({
      operatingDayJourneysExpanded : e,
      eventsExpanded : !e
    })
  }

  eventsExpanseChange(e) {
    this.setState({
      operatingDayJourneysExpanded : !e,
      eventsExpanded : e
    })
  }

  render() {
    if (this.props.vehicleData === null) {
      return null;
    }
    return (
      <div className="TsVehicleDataAccordion">
        <Card
          expanded={this.state.operatingDayJourneysExpanded}
          initiallyExpanded={true}
          onExpandChange={this.operatingDayJourneyExpanseChange}>
          <CardHeader
            title={this.props.localisedStrings.vehicleDataAccordion.vehicleOperatingDayJourneysTitle}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText
            className="TsVehicleDataAccordionCardText"
            expandable={true}>
            <TsVehicleOperatingDayJourneys
              localisedStrings={this.props.localisedStrings}
              vehicleData={this.props.vehicleData}/>
          </CardText>
        </Card>
        <Card
          expanded={this.state.eventsExpanded}
          onExpandChange={this.eventsExpanseChange}>
          <CardHeader
            title={this.props.localisedStrings.vehicleDataAccordion.vehicleEventsTitle}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText
            className="TsVehicleDataAccordionCardText"
            expandable={true}>
            <TsVehicleEvents
              localisedStrings={this.props.localisedStrings}
              vehicleData={this.props.vehicleData}/>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default TsVehicleDataAccordion;
