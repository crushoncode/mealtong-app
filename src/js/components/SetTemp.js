import React from 'react';

const SetTemp = (props) => {
   
    const makeTemp0 = () => {
        props.changeTemp(0)
    }

    const makeTemp10 = () => {
        props.changeTemp(10)
    }

    const makeTemp20 = () => {
        props.changeTemp(20)
    }

    const makeTemp30 = () => {
        props.changeTemp(30)
    }

    return(
        <div>
            <p onClick={makeTemp0}>0</p>
            <p onClick={makeTemp10}>10</p>
            <p onClick={makeTemp20}>20</p>
            <p onClick={makeTemp30}>30</p>
        </div>
    )
}

export { SetTemp }
