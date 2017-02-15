import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsDialog from '../common/TsDialog';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/TsApp.css'
import '../../styles/dialogs/TsJourneyBulletinsDialog.css';

class TsJourneyBulletinsDialog extends Component {

  render() {

    const dialogContent =
      <div className="DialogContent">
        <h1>TBD</h1>
      </div>;

    return (
      <div className="TsJourneyBulletinsDialog">
        <TsDialog dialogTitle={this.props.localisedStrings.journeyBulletinsDialog.dialogTitle}
                  dialogContent={dialogContent}
                  dialogVisible={this.props.journeyBulletinsDialogVisible}
                  dialogCloseRequest={this.props.journeyBulletinsDialogCloseRequest} />
      </div>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selected: store.stopsState.selected
  };
};
export default connect(mapStateToProps)(TsJourneyBulletinsDialog);
