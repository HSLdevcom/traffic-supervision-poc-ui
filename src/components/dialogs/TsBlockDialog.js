import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsDialog from '../common/TsDialog';
import TsVehicleOperatingDayJourneys from '../panels/vehicle/TsVehicleOperatingDayJourneys.js'
import '../../styles/TsApp.css'
import '../../styles/dialogs/TsBlockDialog.css';

class TsBlockDialog extends Component {

  render() {

    const dialogContent =
      <div className="DialogContent">
        <TsVehicleOperatingDayJourneys
          localisedStrings={this.props.localisedStrings}
          vehicleData={this.props.vehicleData}/>
      </div>;

    return (
      <div className="TsBlockDialog">
        <TsDialog dialogTitle={this.props.localisedStrings.blockDialog.dialogTitle}
                  dialogContent={dialogContent}
                  dialogVisible={this.props.blockDialogVisible}
                  dialogCloseRequest={this.props.blockDialogCloseRequest} />
      </div>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selected: store.stopsState.selected
  };
};
export default connect(mapStateToProps)(TsBlockDialog);
