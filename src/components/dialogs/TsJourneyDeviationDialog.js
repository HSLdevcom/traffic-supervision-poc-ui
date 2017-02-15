import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsDialog from '../common/TsDialog';
import '../../styles/TsApp.css'
import '../../styles/dialogs/TsJourneyDeviationDialog.css';

class TsJourneyDeviationDialog extends Component {

  render() {

    const dialogContent =
      <div className="DialogContent">
        <h1>TBD</h1>
      </div>;

    return (
      <div className="TsJourneyDeviationDialog">
        <TsDialog dialogTitle={this.props.localisedStrings.journeyDeviationDialog.dialogTitle}
                  dialogContent={dialogContent}
                  dialogVisible={this.props.journeyDeviationDialogVisible}
                  dialogCloseRequest={this.props.journeyDeviationDialogCloseRequest} />
      </div>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    journeyDeviation: store.journeyDeviationState.journeyDeviation
  };
};
export default connect(mapStateToProps)(TsJourneyDeviationDialog);
