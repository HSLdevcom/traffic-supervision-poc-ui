import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {connect} from 'react-redux';
import BusStopMarker from '../../styles/icons/markers/bus_stop.svg'
import {TsJourneyPatternParsers, TsStopParsers} from '../../util/TsParsers';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/panels/LeftSide.css';
import '../../styles/panels/TsJourneyPatternPanel.css'


class TsJourneyPatternPanel extends Component {

  render() {
    if (Object.getOwnPropertyNames(this.props.selected.journeyPattern).length === 0) {
      return null;
    }

    const journeyPatternDesc = TsJourneyPatternParsers.getJourneyPatternDescription(this.props.selected.journeyPattern);
    const stops = TsJourneyPatternParsers.linksToLinksStops(this.props.selected.journeyPatternLinks);
    const tableRows = stops.map((stop) =>
      <TableRow key={stop.id}>
        <TableRowColumn><img alt="Busstop marker" src={BusStopMarker}/></TableRowColumn>
        <TableRowColumn>{TsStopParsers.getStopDescription(stop)}</TableRowColumn>
      </TableRow>
    );

    return (
      <Paper className="TsJourneyPatternPanel LeftSide" style={TsCommonStyle.paper.style}
             zDepth={TsCommonStyle.paper.paperZDepth}>
        <p className="TsTitle">{journeyPatternDesc}</p>
        <Tabs className="Tabs">
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPatternPanel.stopListTabTitle}>
            <Table height="500px">
              <TableBody displayRowCheckbox={TsCommonStyle.table.displayRowCheckbox}>{tableRows}</TableBody>
            </Table>
          </Tab>
          <Tab className="Tab" style={TsCommonStyle.tab.style}
               label={this.props.localisedStrings.journeyPatternPanel.completedDeparturesTabTitle}>
            <p>-- ei implementoitu --</p>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    selected: store.journeyPatternsState.selected
  };
};
export default connect(mapStateToProps)(TsJourneyPatternPanel);