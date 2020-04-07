import React from 'react';

let Replay = (props) => {
  return (
    <div>
      <button
        // disabled={props.state.winner}
        className="replay"
        onClick={props.onClick}
      >
        replay!
      </button>
    </div>
  );
};

export default Replay;
