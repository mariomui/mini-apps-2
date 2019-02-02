import React, { Component } from 'react';
import Grid from './reactparts/Grid';
import ScoreBoard from './reactparts/ScoreBoard'


// let framesArr = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bowlingFrames: []
    }
  }
  submitFrame = (bowlingFrame) => {
    const { bowlingFrames } = this.state;


    bowlingFrames.concat(bowlingFrame);
    this.setState({
      bowlingFrames: bowlingFrames.concat(bowlingFrame)

    })
  }
  render() {

    return (
      <div>
        hello
        <Grid submitFrame={this.submitFrame} />
        <ScoreBoard bowlingFrames={this.state.bowlingFrames} />
      </div >
    );
  }
}

export default App;