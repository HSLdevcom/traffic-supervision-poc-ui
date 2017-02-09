import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
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
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({ panelVisible: !this.state.panelVisible });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected.journeyPattern.id && !this.state.panelVisible) {
      this.setState({panelVisible: true });
    } else if (!nextProps.selected.journeyPattern.id && this.state.panelVisible) {
      this.setState({panelVisible: false });
    }
  }

  render() {
    const drawerToggleButtonStyle = {
      width: TsCommonStyle.tsPanel.openCloseButton.width,
      position: TsCommonStyle.tsPanel.openCloseButton.position,
      top: TsCommonStyle.tsPanel.openCloseButton.top(),
      left: TsCommonStyle.tsPanel.openCloseButton.left(this.state.panelVisible)
    };
    const journeyPatternDesc = TsJourneyPatternParsers.getJourneyPatternDescription(this.props.selected.journeyPattern);
    const stops = TsJourneyPatternParsers.linksToLinksStops(this.props.selected.journeyPatternLinks);
    const tableRows = stops.map((stop) =>
      <TableRow key={stop.id}>
        <TableRowColumn><img alt="Busstop marker" src={BusStopMarker}/></TableRowColumn>
        <TableRowColumn>{TsStopParsers.getStopDescription(stop)}</TableRowColumn>
      </TableRow>
    );

    return (
      <div className="TsDrawerPanel">
        <RaisedButton className="TsDrawerPanelButton" label={this.state.panelVisible ? '<' : '>'}
                      primary={true} style={drawerToggleButtonStyle} onClick={() => this.togglePanel()}/>
        <Drawer className="TsJourneyPatternPanel LeftSide" open={this.state.panelVisible} width={350}>
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
        </Drawer>
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