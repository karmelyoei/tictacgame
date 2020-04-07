import React from 'react';

let Players = (props) => {
  let player2 = props.player === 'X' ? 'O' : 'X';

  return (
    <div className="players">
      <div>
        <img src={require('../imges/player2.svg')} alt="player1 pic" />
        <h1>Player1 is : {props.player} </h1>
      </div>
      <div>
        <img src={require('../imges/player1.svg')} alt="player2 pic" />
        <h1>player 2 is : {player2} </h1>
      </div>
    </div>
  );
};

export default Players;
