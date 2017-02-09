import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Paper from 'material-ui/Paper';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import '../../styles/common/TsDialog.css'
import {TsCommonStyle} from '../../TsConfiguration'

class TsDialog extends Component {

  render() {
    if (!this.props.dialogVisible) {
      return null;
    }

    return (
      <div className="TsDialog">
        <Draggable>
          <Paper zDepth={TsCommonStyle.paper.paperZDepth}>
            <div className="TsDialogHeader">
              <div className="TsDialogTitle">{this.props.dialogTitle}</div>
              <NavigationClose className="TsDialogCloseButton" onClick={() => this.props.dialogCloseRequest()}/>
            </div>
            <hr/>
            <div className="TsDialogContent">{this.props.dialogContent}</div>
          </Paper>
        </Draggable>
      </div>
    );
  }
}

export default TsDialog;