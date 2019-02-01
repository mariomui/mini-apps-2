import React, { Component } from 'react';
import moment from 'moment';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
    };
  }

  handleDateChange = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  }


  triggerSubmit = (e) => {
    const { from, to } = this.state;
    const { handleSubmit } = this.props;
    handleSubmit(e, from, to);
  }

  render() {
    const { from, to } = this.state;
    let util = Date.parse(from) < Date.parse(to);
    return (
      <div className="form-group">
        <form onSubmit={this.triggerSubmit}>
          <label className="control-label">
            From:
          <input className="form-control" type="date" name="from" value={from} onChange={this.handleDateChange} />
          </label>

          <label className="control-label">
            To:
          <input className="form-control" type="date" name="to" value={to} onChange={this.handleDateChange} />
          </label>
          {util ? <input className="btn btn-primary" type="submit" value="Submit"></input> : <input className="btn btn-primary" disabled type="submit" value="Submit"></input>}
        </form>
      </div >
    );
  }
}

export default DatePicker;
