import React, { Component } from 'react';
import Pin from './Pin';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsToHit: {},
      board: [],
      initialized: false
    };
  }
  // setPin(rowIdx, columnIdx)
  // i want to show a array of 3 level 4s.then an array of 9.
  resetPins = () => {
    let counter = 1;
    let board = [];
    for (var i = 0; i < 3; i++) {
      var row = [];
      for (var j = 0; j < 3; j++) {
        row.push(counter);
        counter++;
      }
      board.push(row);
    }
    board.push([0, 10, 0]);
    this.setState({
      board: board
    },
      () => { console.log('notify') })
  }

  componentDidMount() {
    this.resetPins();
    if (this.state.initialized === false) {
      this.resetPins();
    }
    if (this.state.initialized === false) {
      this.setState({
        initialized: true
      })
    }
  }

  render() {
    const { board } = this.state;

    return (
      <div>
        {board.map((row, rowIdx) => {
          return (
            <div>
              {
                row.map((pin, colIdx) => {
                  return (
                    <Pin pin={pin} rowIdx={rowIdx} colIdx={colIdx} />
                  );
                })
              }
            </div>
          );
        })}
        <button onClick={this.resetPins}>Reset</button>
      </div>
    );
  }
}

export default Grid;
