import React, {Component} from 'react';
import TsDrawerPanel from '../../common/TsDrawerPanel';
import TsVehicleDataSearch from './TsVehicleDataSearch.js';
import TsVehicleDataAccordion from './TsVehicleDataAccordion.js';
import '../../../styles/panels/RightSide.css';
import '../../../styles/panels/vehicle/TsVehicleDataPanel.css'

class TsVehicleDataPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panelVisible: false,
      vehicleData: null
    };
    this.setPanelVisible = this.setPanelVisible.bind(this);
    this.handleVehicleDataSelected = this.handleVehicleDataSelected.bind(this);
  }

  setPanelVisible(visible) {
    this.setState({ panelVisible: visible });
  }

  handleVehicleDataSelected(data) {
    this.setState({
      vehicleData: data,
      panelVisible: true
    });
  }
  render() {

    const contentInsideDrawer =
    <div>
      <TsVehicleDataSearch
        localisedStrings={this.props.localisedStrings}
        handleVehicleDataSelected={this.handleVehicleDataSelected}/>
      <TsVehicleDataAccordion
        localisedStrings={this.props.localisedStrings}
        vehicleData={this.state.vehicleData}/>
    </div>;

    return (
      <div className="TsVehicleDataPanel">
        <TsDrawerPanel children={contentInsideDrawer}
                       openSecondary={true}
                       panelVisible={this.state.panelVisible}
                       panelToggleButtonVisible={true}
                       setPanelVisible={this.setPanelVisible}/>
      </div>
    );
  }
}

export default TsVehicleDataPanel;
