import React from 'react';
import PropTypes from 'prop-types';

class Savelist extends React.Component {
  render() {
    const savedItems = this.props.savelist.map((restaurant) => {
      return (
        <div className="saved-items" key={restaurant.id}>
          {restaurant.name}
        </div>
      );
    });
    return <div> {savedItems} </div>;
  }
}

Savelist.propTypes = {
  savelist: PropTypes.array
};

export { Savelist };
