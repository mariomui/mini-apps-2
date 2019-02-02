import React, { Component } from 'react';
import Pin from './Pin';

let globalScore = 0;
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsToHit: {},
      board: [],
      score: 0
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

  addToScore = (value) => {
    globalScore = this.state.score += Number(value);
    console.log(globalScore);
  }
  triggerSubmit = () => {
    this.props.submitFrame(globalScore);

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
                    <Pin addToScore={this.addToScore} key={`${rowIdx}+${colIdx}`} pin={pin} rowIdx={rowIdx} colIdx={colIdx} />
                  );
                })
              }
            </div>
          );
        })}
        <button onClick={this.resetPins}>Reset</button>
        <button onClick={this.triggerSubmit}>
          Submit Frame
        </button>
      </div>
    );
  }
}

export default Grid;
