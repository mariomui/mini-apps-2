import React, { Component } from 'react';
import Pin from './Pin';
import { timingSafeEqual } from 'crypto';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsToHit: {},
      board: [],
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
      board,
    }
      ,
      () => {
        this.setState({
          state: this.state
        })
        console.log('notify');
      })
  }

  componentDidMount() {
    this.resetPins();
  }

  render() {
    const { board } = this.state;
    // this.resetPins();

    return (
      <div>
        {board.map((row, rowIdx) => {
          return (
            <div>
              {
                row.map((pin, colIdx) => {
                  return (
                    <Pin key={`${rowIdx}+${colIdx}`} pin={pin} rowIdx={rowIdx} colIdx={colIdx} />
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
