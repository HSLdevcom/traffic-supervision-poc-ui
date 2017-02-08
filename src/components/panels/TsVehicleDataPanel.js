import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TsVehicleDataSearch from './TsVehicleDataSearch.js';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/panels/RightSide.css';
import '../../styles/panels/TsVehicleDataPanel.css'

class TsVehicleDataPanel extends Component {

  render() {
    return (
      <Paper className="TsOperatorPanel RightSide" style={TsCommonStyle.paper.style}
             zDepth={TsCommonStyle.paper.paperZDepth}>
      <TsVehicleDataSearch localisedStrings={this.props.localisedStrings}/>
      </Paper>
    );
  }
}

export default TsVehicleDataPanel;
