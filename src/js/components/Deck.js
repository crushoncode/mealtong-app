import React from 'react';
import { restaurants } from '../data/seed';

class Deck extends React.Component {
  render() {
    // search which restaurant matches the criteria
    // check if the selected temperature is between minTemp and maxTemp
    const matchingRestaurants = restaurants.filter((restaurant) => {
      if (
        this.props.temperature >= restaurant.minTemperature &&
        this.props.temperature <= restaurant.maxTemperature
      ) {
        return true;
      }
      return false;
    });

    // map over matchingRestaurants
    const listItems = matchingRestaurants.map((restaurant) => {
      return (
        <div className="card-container">
          <div className="card">
            <div className="restaurant-name" key={restaurant.id}>
              {restaurant.name}
            </div>
          </div>
          <div className="card">
            <div className="restaurant-name" key={restaurant.id}>
              {restaurant.name}
            </div>
          </div>
        </div>
      );
    });
    return <div> {listItems} </div>;
  }
}

export { Deck };
