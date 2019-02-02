import React, { Component } from 'react';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bowlingFrames: []
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.bowlingFrames !== prevProps.bowlingFrames) {
      this.setState(
        {
          bowlingFrames:
            this.state.bowlingFrames.concat(this.props.bowlingFrames)

        })
    }
  }
  render() {
    const { bowlingFrames } = this.props;

    return (
      <div>
        {bowlingFrames.map((bowlingFrame) => {
          return (
            <div>
              {bowlingFrame}
            </div>
          );
        })}
      </div >
    )
  }
}

export default ScoreBoard