import React from 'react';
import { SetTemp } from './SetTemp';

// before making functions in SetTemp component,
// set state and make function in Body component first.
class Body extends React.Component {
    state = {
        temperature: 0
    }

    changeTemp = (temp) => {
        this.setState(() => {
            return {
                temperature: temp
            }
        });
    }
  
    render() {
        return (
            <div>
                <SetTemp changeTemp={this.changeTemp} />
                <p> temperature {this.state.temperature} </p>
            </div>
        )
    }
}

export { Body }