import React, { Component } from 'react';
import moment from 'moment';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      allowSubmit: false,
    };
  }

  handleDateChange = (e) => {
    console.log('hey', e.target.value)
    const { name } = e.target;
    const isAllowed = this.allowSubmit();
    this.setState({
      [name]: e.target.value,
      allowSubmit: isAllowed
    });
  }

  allowSubmit = () => {
    const { from, to } = this.state;
    // let fromNum = Date.parse(this.state.from);
    // let toNum = Date.parse(this.state.to);
    if (from > to) {
      return true;
    }
    return false;
  }

  triggerSubmit = (e) => {
    const { from, to } = this.state;
    const { handleSubmit } = this.props;
    handleSubmit(e, from, to);
  }

  render() {
    const { from, to } = this.state;
    return (
      <div>

        <form onSubmit={this.triggerSubmit}>
          <label>
            From:
          <input type="date" name="from" value={from} onChange={this.handleDateChange} />
          </label>

          <label>
            To:
          <input type="date" name="to" value={to} onChange={this.handleDateChange} />
          </label>
          {this.state.allowSubmit ? <input type="submit" value="Submit"></input> : <input type="submit" value="Submit"></input>}
        </form>
      </div>
    );
  }
}

export default DatePicker;
