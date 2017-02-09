import React, {Component} from 'react';
import TsVehicleOperatingDayJourney from './TsVehicleOperatingDayJourney.js'
import '../../styles/panels/RightSide.css';
import {DummyVehicleOperatingDayJourneys} from '../../dummydata/VehicleOperatingDayJourneys.js'

class TsVehicleOperatingDayJourneys extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var journeys = DummyVehicleOperatingDayJourneys.map(function(item) {
     return (
       <TsVehicleOperatingDayJourney key={item['id']} data={item}/>
     )
    });

    return (
      <div>
        {journeys}
      </div>
    );
  }
}

export default TsVehicleOperatingDayJourneys;
