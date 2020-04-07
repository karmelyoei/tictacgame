import React, { Component } from 'react';
import Replay from './Replay';
import Players from './Players';
import Winner from './Winner';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: props.location.state.entry,
      fixedPlayer: props.location.state.entry,
      winner: null,
      tie: false,
    };
    this.boardGame = this.boardGame.bind(this);
    this.reset = this.reset.bind(this);
  }

  checkWinner() {
    const winCombos = [
      //array thats gonna show winning combinations
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let index = 0; index < winCombos.length; index++) {
      let [a, b, c] = winCombos[index];
      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        this.setState({ winner: this.state.player });
        this.winnerResult();
      } else {
        let hasChar = (currentValue) =>
          currentValue === 'X' || currentValue === 'O';
        if (this.state.board.every(hasChar) && !this.state.winner)
          this.setState({ tie: true });
        this.tieRound();
      }
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#dbc5fa';
  }

  handleClick(index, event) {
    let newBoard = this.state.board;
    if (this.state.board[index] === null && !this.state.winner) {
      newBoard[index] = this.state.player;
      this.setState((prevState) => {
        return {
          board: newBoard,
          player: this.state.player === 'X' ? 'O' : 'X',
        };
      });

      this.checkWinner();
    }
  }

  boardGame() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return array.map((item, index) => {
      return (
        <button
          key={index}
          onClick={this.handleClick.bind(this, index)}
          name={item}
        >
          {this.state.board[index]}
        </button>
      );
    });
  }
  winnerResult() {
    if (this.state.winner) {
      return <Winner winner={this.state.winner} />;
    }
  }
  tieRound() {
    if (this.state.tie) return <h1>Its a tie try again!</h1>;
  }

  reset() {
    this.setState(() => {
      return {
        board: Array(9).fill(null),
        player: null,
        winner: null,
      };
    });
  }

  render() {
    return (
      <div className="game">
        <Players player={this.state.fixedPlayer} />
        <div className="grid">{this.boardGame()}</div>
        <Replay onClick={() => this.reset()} state={this.state} />
        <div className="winner">{this.winnerResult()}</div>
        <div className="winner">{this.tieRound()}</div>
      </div>
    );
  }
}

export default Game;
