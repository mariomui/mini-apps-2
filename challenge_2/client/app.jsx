import React from 'react';
import axios from 'axios';
import ChartOne from './components/ChartOne';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hey: '',
    };
  }

  componentDidMount() {
    axios.get('/api/data')
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <ChartOne />
      </div>

    );
  }
}

export default App;
