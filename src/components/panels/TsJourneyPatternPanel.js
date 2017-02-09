import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import TsDrawerPanel from './common/TsDrawerPanel';
import {connect} from 'react-redux';
import BusStopMarker from '../../styles/icons/markers/bus_stop.svg'
import {TsJourneyPatternParsers, TsStopParsers} from '../../util/TsParsers';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/panels/LeftSide.css';
import '../../styles/panels/TsJourneyPatternPanel.css'


class TsJourneyPatternPanel extends Component {

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
    this.setPanelVisible(nextProps.selected.journeyPattern.id !== undefined);
  };

  render() {
    const journeyPatternDesc = TsJourneyPatternParsers.getJourneyPatternDescription(this.props.selected.journeyPattern);
    const stops = TsJourneyPatternParsers.linksToLinksStops(this.props.selected.journeyPatternLinks);
    const tableRows = stops.map((stop) =>
      <TableRow key={stop.id}>
        <TableRowColumn><img alt="Busstop marker" src={BusStopMarker}/></TableRowColumn>
        <TableRowColumn>{TsStopParsers.getStopDescription(stop)}</TableRowColumn>
      </TableRow>
    );

    const contentInsideDrawer =
      <div>
        <p className="TsTitle">{journeyPatternDesc}</p>
        <Tabs className="Tabs">
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPatternPanel.stopListTabTitle}>
            <Table>
              <TableBody displayRowCheckbox={TsCommonStyle.table.displayRowCheckbox}>{tableRows}</TableBody>
            </Table>
          </Tab>
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPatternPanel.completedDeparturesTabTitle}>
            <p>-- ei implementoitu --</p>
          </Tab>
        </Tabs>
      </div>;

  return (
    <div className="TsJourneyPatternPanel">
      <TsDrawerPanel children={contentInsideDrawer}
                     panelVisible={this.state.panelVisible}
                     setPanelVisible={this.setPanelVisible}/>
    </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    selected: store.journeyPatternsState.selected
  };
};
export default connect(mapStateToProps)(TsJourneyPatternPanel);