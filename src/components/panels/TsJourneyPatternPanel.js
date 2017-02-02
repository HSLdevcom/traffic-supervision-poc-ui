import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import BusStopMarker from '../../styles/icons/markers/bus_stop.svg'
import {TsJourneyPatternParsers, TsStopParsers} from '../../util/TsParsers';
import {TsCommonStyle} from '../../TsConfiguration';
import '../../styles/panels/LeftSide.css';
import '../../styles/panels/TsJourneyPatternPanel.css'

import {DummyJourneyPatterns} from '../../dummydata/JourneyPatterns'; //todo; replace with real data
import {DummyLinksForJourneyPattern} from '../../dummydata/LinksForJourneyPattern';


class TsJourneyPatternPanel extends Component {

  render() {
    const journeyPatternDesc = TsJourneyPatternParsers.getJourneyPatternDescription(DummyJourneyPatterns[0]);
    const stops = TsJourneyPatternParsers.linksToLinksStops(DummyLinksForJourneyPattern);
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
              <TableBody displayRowCheckbox={TsCommonStyle.table.displayRowCheckbox}>
                {tableRows}
              </TableBody>
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

export default TsJourneyPatternPanel;