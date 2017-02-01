import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import TsDayPicker from './TsDayPicker.js';
import "moment/locale/fi";
import 'react-day-picker/lib/style.css';
import '../../styles/panels/AllPanels.css';
import '../../styles/panels/TsDaySelectPanel.css';


class TsDaySelectPanel extends Component {
  constructor() {
    super();
    this.state = {
      selectedDate: moment().format('L'),
    }

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(newDate) {
    this.setState({
      selectedDate: newDate,
    });
  }

  handleShortcutButton(amount) {
    let day = moment(this.state.selectedDate, 'L', true);
    day.add(amount, 'day');
    this.setState({
      selectedDate: moment(day).format('L')
    });
  }

  render() {
    return (
      <div className="TsDaySelectPanel AllPanels">
        <table>
          <tbody>
            <tr>
              <td><RaisedButton label="<< 7 pv" primary={true} style={{height: '20px'}} onClick={() => this.handleShortcutButton(-7)}/></td>
              <td><RaisedButton label="<< 1 pv" primary={true} style={{height: '20px'}} onClick={() => this.handleShortcutButton(-1)}/></td>
              <td><TsDayPicker date={this.state.selectedDate} onDateChange={this.onDateChange}/></td>
              <td><RaisedButton label="1 pv >>" primary={true} style={{height: '20px'}} onClick={() => this.handleShortcutButton(1)}/></td>
              <td><RaisedButton label="7 pv >>" primary={true} style={{height: '20px'}} onClick={() => this.handleShortcutButton(7)}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TsDaySelectPanel;
