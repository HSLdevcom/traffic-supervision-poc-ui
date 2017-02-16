import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TsVehicleActions} from './../../../redux/TsActions'
import TsDrawerPanel from '../../common/TsDrawerPanel';
import TsJourneyDataSearch from './TsJourneyDataSearch'
import TsJourneyDataInformation from './TsJourneyDataInformation'
import TsJourneyDataWeather from './TsJourneyDataWeather'

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
    const isSelectedJourney = nextProps.selected.journey.journeyId !== undefined;
    this.setPanelVisible(isSelectedJourney);
    if (isSelectedJourney) {
      this.props.dispatch(TsVehicleActions.setSelectedMonitoredVehicle(nextProps.selected.journey.monitored.vehicles[0]));
    }
  }

  render() {
    return (
      <div className="TsJourneyDataPanel">
        <TsDrawerPanel panelVisible={this.state.panelVisible}
                       setPanelVisible={this.setPanelVisible}>
          <TsJourneyDataSearch localisedStrings={this.props.localisedStrings}/>
          <TsJourneyDataInformation localisedStrings={this.props.localisedStrings}/>
          <TsJourneyDataWeather localisedStrings={this.props.localisedStrings}/>
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
