import React from 'react';
import { Deck } from './Deck';

// before making functions in SetTemp component,
// set state and make function in Body component first.

class Body extends React.Component {
  state = {
    temperature: 0,
    maxValue: 100, // the higher the smoother when dragging
    speed: 5
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="range"
          min="0"
          max="40"
          defaultValue="20"
          value={this.state.value}
          className="range"
          onChange={this.handleChange}
          id="myRange"
        />
        <p className="temp-indicator">
          The current temperature is {this.state.value}ºC.
        </p>
        <Deck temperature={this.state.value} />
      </React.Fragment>
    );
  }
}

export { Body };
