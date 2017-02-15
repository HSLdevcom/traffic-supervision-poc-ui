import React, {Component} from 'react';
import {connect} from 'react-redux';
import TsDrawerPanel from '../../common/TsDrawerPanel';
import TsJourneyDataSearch from './TsJourneyDataSearch'
import TsJourneyData from './TsJourneyDataInformation'

class TsJourneyDataPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panelVisible: false
    };
    this.setPanelVisible = this.setPanelVisible.bind(this);
  }

  setPanelVisible(visible) {
    this.setState({ panelVisible: visible });
  }

  componentWillReceiveProps(nextProps) {
    this.setPanelVisible(nextProps.selected.journey.journeyId !== undefined);
  }

  render() {
    return (
      <div className="TsJourneyDataPanel">
        <TsDrawerPanel panelVisible={this.state.panelVisible}
                       setPanelVisible={this.setPanelVisible}>
          <TsJourneyDataSearch localisedStrings={this.props.localisedStrings}/>
          <TsJourneyData localisedStrings={this.props.localisedStrings}/>
        </TsDrawerPanel>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    selected: store.journeysState.selected
  };
};
export default connect(mapStateToProps)(TsJourneyDataPanel);
