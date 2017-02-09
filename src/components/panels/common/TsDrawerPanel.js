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
    var toggleLabel = function (label) {
      return label === '>' ? '<' : '>';
    };

    let drawerToggleButtonStyle = {
      width: TsCommonStyle.tsPanel.openCloseButton.width,
      position: TsCommonStyle.tsPanel.openCloseButton.position,
      top: TsCommonStyle.tsPanel.openCloseButton.top(),
    };
    let buttonLabel = '>';
    if (this.props.openSecondary) {
      drawerToggleButtonStyle.right = TsCommonStyle.tsPanel.openCloseButton.leftRight(this.props.panelVisible);
      if (!this.props.panelVisible) {
        buttonLabel = toggleLabel(buttonLabel);
      }
    } else {
      drawerToggleButtonStyle.left = TsCommonStyle.tsPanel.openCloseButton.leftRight(this.props.panelVisible);
      if (this.props.panelVisible) {
        buttonLabel = toggleLabel(buttonLabel);
      }
    }

    return (
      <div className="TsDrawerPanel">
        <RaisedButton className="TsDrawerPanelButton" label={buttonLabel}
                      primary={true} style={drawerToggleButtonStyle} onClick={() => this.togglePanel()}/>
        <Drawer className="TsDrawerPanelContent"
                open={this.props.panelVisible} width={TsCommonStyle.tsPanel.width}
                openSecondary={this.props.openSecondary}>
          {this.props.children}
          </Drawer>
      </div>
    );
  }
}

export default TsDrawerPanel;