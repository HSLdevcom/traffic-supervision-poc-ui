import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsStopVisitDialog from './TsStopVisitDialog'
import TsBlockDialog from './TsBlockDialog'
import {TsStopActions} from '../../redux/TsActions';

class TsDialogHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopVisitDialogVisible: false,
      blockDialogVisible: false
    };
    this.stopVisitDialogCloseRequest = this.stopVisitDialogCloseRequest.bind(this);
    this.blockDialogCloseRequest = this.blockDialogCloseRequest.bind(this);
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

  blockDialogCloseRequest() {
    this.setState({
      blockDialogVisible: false
    });
  }

  render() {
    return (
      <div>
        <TsStopVisitDialog className="TsStopVisitDialog"
                           localisedStrings={this.props.localisedStrings}
                           stopVisitDialogVisible={this.state.stopVisitDialogVisible}
                           stopVisitDialogCloseRequest={this.stopVisitDialogCloseRequest}/>
        <TsBlockDialog className="TsBlockDialog"
                       localisedStrings={this.props.localisedStrings}
                       blockDialogVisible={this.state.blockDialogVisible}
                       blockDialogCloseRequest={this.blockDialogCloseRequest}/>
      </div>
    );
  };
}

const mapStateToProps = function(store) {
  return {
    selectedStop: store.stopsState.selected
  };
};
export default connect(mapStateToProps)(TsDialogHandler);
