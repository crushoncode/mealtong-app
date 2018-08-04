import React from 'react';
import { Deck } from './Deck';
import { Slider } from './Slider';

class Body extends React.Component {
  state = {
    temperature: null
  };

  handleLike = (restaurant) => {
    this.props.handleLike(restaurant);
  };

  handleTemperatureChange = (temperature) => {
    this.setState({
      temperature: temperature
    });
  };

  render() {
    return (
      <React.Fragment>
        <p className="temp-indicator">
          The current temperature is {this.state.temperature}ºC.
        </p>
        <Slider onChange={this.handleTemperatureChange} />
        <Deck
          temperature={this.state.temperature}
          handleLike={this.handleLike}
        />
      </React.Fragment>
    );
  }
}

export { Body };
