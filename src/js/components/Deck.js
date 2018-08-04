import React from 'react';
import { restaurants } from '../data/seed';

class Deck extends React.Component {
  handleLike = (restaurant) => {
    this.props.handleLike(restaurant);
  };

  render() {
    if (this.props.temperature == null) {
      return null;
    }

    // search which restaurant matches the criteria
    // check if the selected temperature is between minTemp and maxTemp
    let matchingRestaurants = restaurants.filter((restaurant) => {
      if (
        this.props.temperature >= restaurant.minTemperature &&
        this.props.temperature <= restaurant.maxTemperature
      ) {
        return true;
      }
      return false;
    });

    matchingRestaurants = matchingRestaurants.slice(0, 2);

    // map over matchingRestaurants
    const listItems = matchingRestaurants.map((restaurant) => {
      return (
        <div className="card-container">
          <div className="card">
            <div className="restaurant-name" key={restaurant.id}>
              <button
                onClick={() => {
                  this.handleLike(restaurant);
                }}
              >
                like
              </button>
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
