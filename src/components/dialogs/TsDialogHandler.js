import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsStopVisitDialog from './TsStopVisitDialog'
import TsBlockDialog from './TsBlockDialog'
import TsJourneyBulletinsDialog from './TsJourneyBulletinsDialog'
import TsJourneyDeviationDialog from './TsJourneyDeviationDialog'
import {TsStopActions} from '../../redux/TsActions';

class TsDialogHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopVisitDialogVisible: false,
      blockDialogVisible: false,
      journeyBulletinsDialogVisible: false,
      journeyDeviationDialogVisible: false

    };
    this.stopVisitDialogCloseRequest = this.stopVisitDialogCloseRequest.bind(this);
    this.blockDialogCloseRequest = this.blockDialogCloseRequest.bind(this);
    this.journeyBulletinsDialogCloseRequest = this.journeyBulletinsDialogCloseRequest.bind(this);
    this.journeyDeviationDialogCloseRequest = this.journeyDeviationDialogCloseRequest.bind(this);
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

  journeyBulletinsDialogCloseRequest() {
    this.setState({
      journeyBulletinsDialogVisible: false
    });
  }

  journeyDeviationDialogCloseRequest() {
    this.setState({
      journeyDeviationDialogVisible: false
    });
  }

  render() {
    return (
      <div>
        <TsStopVisitDialog
          className="TsStopVisitDialog"
          localisedStrings={this.props.localisedStrings}
          stopVisitDialogVisible={this.state.stopVisitDialogVisible}
          stopVisitDialogCloseRequest={this.stopVisitDialogCloseRequest}/>
        <TsBlockDialog
          className="TsBlockDialog"
          localisedStrings={this.props.localisedStrings}
          blockDialogVisible={this.state.blockDialogVisible}
          blockDialogCloseRequest={this.blockDialogCloseRequest}/>
        <TsJourneyBulletinsDialog
          className="TsJourneyBulletinsDialog"
          localisedStrings={this.props.localisedStrings}
          journeyBulletinsDialogVisible={this.state.journeyBulletinsDialogVisible}
          journeyBulletinsDialogCloseRequest={this.journeyBulletinsDialogCloseRequest}/>
        <TsJourneyDeviationDialog
          className="TsJourneyDeviationDialog"
          localisedStrings={this.props.localisedStrings}
          journeyDeviationDialogVisible={this.state.journeyDeviationDialogVisible}
          journeyDeviationDialogCloseRequest={this.journeyDeviationDialogCloseRequest}/>
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
