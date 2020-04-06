import React, { Component } from 'react';

import isEmpty from 'lodash.isempty';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let name = event.target.name;
    if (event.target.value === 'start') {
      if (isEmpty(this.state)) {
        this.setState({ X: 'X' });
        console.log('Without choose', this.state);
        this.props.history.push('/game');
      } else {
        this.setState({ [name]: name });
        console.log('with choose', this.state);
      }
    }
  }
  render() {
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
        <button className="startBtn" onClick={this.handleClick} value="start">
          Start
        </button>
      </div>
    );
  }
}

export default Start;
