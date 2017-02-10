import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsStopVisitDialog from './TsStopVisitDialog'
import {TsStopActions} from '../../redux/TsActions';

class TsDialogHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopVisitDialogVisible: false
    };
    this.stopVisitDialogCloseRequest = this.stopVisitDialogCloseRequest.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
        stopVisitDialogVisible: nextProps.selectedStop.stop.id !== undefined
    });
  };

  stopVisitDialogCloseRequest() {
    this.setState({
      stopVisitDialogVisible: false
    });
    this.props.dispatch(TsStopActions.clearSelectedStop());// setting dummy stuff
  }

  render() {
    return (
      <TsStopVisitDialog className="TsStopVisitDialog"
                         localisedStrings={this.props.localisedStrings}
                         stopVisitDialogVisible={this.state.stopVisitDialogVisible}
                         stopVisitDialogCloseRequest={this.stopVisitDialogCloseRequest}/>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selectedStop: store.stopsState.selected
  };
};
export default connect(mapStateToProps)(TsDialogHandler);