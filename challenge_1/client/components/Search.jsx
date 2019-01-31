import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
  }

  clear = () => {
    this.setState({
      searchTerm: ''
    })
  }

  componentDidMount() {
    this.setState({
      searchTerm: ''
    })
  }

  triggerSubmit = (e) => {
    const { handleSubmit } = this.props;
    const { searchTerm } = this.state;

    handleSubmit(e, searchTerm);
    this.clear();
  }

  render() {
    // const { handleSubmit } = this.props;
    const { searchTerm } = this.state;

    return (
      <thead>
        <tr>
          <td>
            <form onSubmit={this.triggerSubmit}>
              <label> Search
                <input required name="q" value={searchTerm} onChange={this.handleChange} type="text" />
              </label>
              <input type="submit" value="Submit" />
            </form >
          </td>
        </tr>
      </thead>
    );
  }
}
export default Search;
