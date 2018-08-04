import React from 'react';

class Slider extends React.Component {
  state = {
    value: '20'
  };

  handleInput = (e) => {
    //Change slide thumb color on way up
    if (e.target.value > 10) {
      e.target.classList.add('ltpurple');
    }
    if (e.target.value > 20) {
      e.target.classList.add('purple');
    }
    if (e.target.value > 30) {
      e.target.classList.add('pink');
    }

    //Change slide thumb color on way down
    if (e.target.value < 10) {
      e.target.classList.remove('ltpurple');
    }
    if (e.target.value < 20) {
      e.target.classList.remove('purple');
    }
    if (e.target.value < 30) {
      e.target.classList.remove('pink');
    }
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="range"
          min="0"
          max="40"
          value={this.state.value}
          className="range"
          onChange={this.handleChange}
          onInput={this.handleInput}
          id="myRange"
        />
      </React.Fragment>
    );
  }
}

export { Slider };
