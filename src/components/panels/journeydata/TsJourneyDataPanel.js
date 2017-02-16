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
      panelVisible: false,
      panelToggleButtonVisible: false
    };
    this.setPanelVisible = this.setPanelVisible.bind(this);
  }

  setPanelVisible(visible, nextProps) {
    const propsToUse = nextProps ? nextProps : this.props;
    this.setState({
      panelVisible: visible,
      panelToggleButtonVisible: propsToUse.selected.journey.journeyId !== true
    });
  }

  componentWillReceiveProps(nextProps) {
    const isSelectedJourney = nextProps.selected.journey.journeyId !== undefined;
    this.setPanelVisible(isSelectedJourney, nextProps);
    if (isSelectedJourney) {
      this.props.dispatch(TsVehicleActions.setSelectedMonitoredVehicle(nextProps.selected.journey.monitored.vehicles[0]));
    }
  }

  render() {
    return (
      <div className="TsJourneyDataPanel">
        <TsDrawerPanel panelVisible={this.state.panelVisible}
                       panelToggleButtonVisible={this.state.panelToggleButtonVisible}
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
