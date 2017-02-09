import React, {Component} from 'react';
import TsDrawerPanel from '../common/TsDrawerPanel';
import TsVehicleDataSearch from './TsVehicleDataSearch.js';
import TsVehicleDataAccordion from './TsVehicleDataAccordion.js';
import '../../styles/panels/RightSide.css';
import '../../styles/panels/TsVehicleDataPanel.css'

class TsVehicleDataPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panelVisible: false
    };
    this.setPanelVisible = this.setPanelVisible.bind(this);
  }

  setPanelVisible(visible) {
    this.setState({ panelVisible: visible });
  }

  render() {

    const contentInsideDrawer =
    <div>
      <TsVehicleDataSearch localisedStrings={this.props.localisedStrings}/>
      <TsVehicleDataAccordion localisedStrings={this.props.localisedStrings}/>
    </div>;

    return (
      <div className="TsOperatorPanel">
        <TsDrawerPanel children={contentInsideDrawer}
                       openSecondary={true}
                       panelVisible={this.state.panelVisible}
                       setPanelVisible={this.setPanelVisible}/>
      </div>
    );
  }
}

export default TsVehicleDataPanel;
