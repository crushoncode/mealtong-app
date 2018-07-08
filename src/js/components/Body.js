import React from 'react';
import { SetTemp } from './SetTemp';

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