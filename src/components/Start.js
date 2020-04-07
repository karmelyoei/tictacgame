import React, { Component } from 'react';

import isEmpty from 'lodash.isempty';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 'X',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let { name } = event.target;
    this.setState((preState) => {
      return { entry: name };
    });

    if (event.target.value === 'start') {
      if (!isEmpty(this.state)) {
        this.props.history.push('/game', this.state);
      }
      this.props.history.push('/game', this.state);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="start">
        <h1>Choose a side</h1>
        <div className="start_btns">
          <button onClick={this.handleClick} name="X">
            X
          </button>
          <button onClick={this.handleClick} name="O">
            O
          </button>
        </div>
        <button
          className="startBtn"
          onClick={(event) => this.handleClick(event)}
          value="start"
        >
          Start
        </button>
      </div>
    );
  }
}

export default Start;
