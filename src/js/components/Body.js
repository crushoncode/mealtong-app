import React from 'react';
import { SetTemp } from './SetTemp';
import { Deck } from './Deck';

// before making functions in SetTemp component,
// set state and make function in Body component first.

class Body extends React.Component {
  state = {
    temperature: 0
  };

  changeTemp = (temp) => {
    this.setState(() => {
      return {
        temperature: temp
      };
    });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  // temperature {this.state.value} is passed into Deck temperature={this.state value}

  render() {
    return (
      <React.Fragment>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="40"
            defaultValue="20"
            value={this.state.value}
            className="slider"
            onChange={this.handleChange}
            id="myRange"
          />
          <SetTemp changeTemp={this.changeTemp} />
          <p> temperature={this.state.value} </p>
        </div>

        <div>
          <Deck temperature={this.state.value} />
        </div>
      </React.Fragment>
    );
  }
}

export { Body };
