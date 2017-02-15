import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsDialog from '../common/TsDialog';
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
    journeyBulletins: store.journeyBulletinsState.journeyBulletins
  };
};
export default connect(mapStateToProps)(TsJourneyBulletinsDialog);
