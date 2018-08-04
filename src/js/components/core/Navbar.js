import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  handleLogout = async () => {
    try {
      await this.props.handleLogout();
    } finally {
    }
  };

  commonNavbarLinks = () => {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/signin"> Sign in </Link>
          </li>
          <li>
            <Link to="/signup"> Sign up </Link>
          </li>
          <li>
            <Link to="/savelist"> Savelist </Link>
          </li>
          <li>
            <Link to="/review"> Review </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  navbar = () => {
    let navbarLinks;

    if (this.props.loggedIn) {
      navbarLinks = (
        <ul>
          {this.commonNavbarLinks()}
          <li>
            <button onClick={this.handleLogout}>Sign out</button>;
          </li>
        </ul>
      );
      return navbarLinks;
    } else {
      navbarLinks = <ul>{this.commonNavbarLinks()}</ul>;
      return navbarLinks;
    }
  };

  render() {
    return (
      <header>
        <nav>{this.navbar()}</nav>
        {this.props.loggedIn}
      </header>
    );
  }
}

Navbar.propTypes = {
  handleLogout: PropTypes.func,
  loggedIn: PropTypes.bool
};

Navbar.defaultProps = {
  handleLogout: null,
  loggedIn: null
};

export { Navbar };
