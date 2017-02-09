import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {TsCommonStyle} from '../../../TsConfiguration';
import '../../../styles/panels/common/TsDrawerPanel.css'


class TsDrawerPanel extends Component {

  constructor(props) {
    super(props);
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.props.setPanelVisible(!this.props.panelVisible);
  }

  render() {
    const drawerToggleButtonStyle = {
      width: TsCommonStyle.tsPanel.openCloseButton.width,
      position: TsCommonStyle.tsPanel.openCloseButton.position,
      top: TsCommonStyle.tsPanel.openCloseButton.top(),
      left: TsCommonStyle.tsPanel.openCloseButton.left(this.props.panelVisible)
    };

    return (
      <div className="TsDrawerPanel">
        <RaisedButton className="TsDrawerPanelButton" label={this.props.panelVisible ? '<' : '>'}
                      primary={true} style={drawerToggleButtonStyle} onClick={() => this.togglePanel()}/>
        <Drawer className="TsDrawerPanelContent" open={this.props.panelVisible} width={350}>{this.props.children}</Drawer>
      </div>
    );
  }
}

export default TsDrawerPanel;