import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  // loadCommentsFromServer = () => {

  // }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
  }
  clear = (e) => {
    this.setState({
      searchTerm: ''
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (

      <form onSubmit={
        (e) => {
          handleSubmit(e, this.state.searchTerm);
          this.clear(e);
        }}>
        <label> Search
        <input required name="q" value={this.state.searchTerm} onChange={this.handleChange} type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form >
    );
  }
}
export default Search;
