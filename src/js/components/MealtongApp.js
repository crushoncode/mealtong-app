import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './core/Navbar';
import { Header } from './Header';
import { Body } from './Body';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Savelist } from './Savelist';
import { Review } from './Review';
import { Contact } from './Contact';

class MealtongApp extends React.Component {
  constructor() {
    super();
    this.state = {
      savelist: [],
      loaded: false,
      loggedIn: false,
      name: null,
      email: null,
      authToken: null,
      redirectHome: false
    };
  }

  handleLike = (restaurant) => {
    this.setState(
      () => ({
        savelist: [...this.state.savelist, restaurant]
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          loggedIn={this.state.loggedIn}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <Body
                  loggedIn={this.state.loggedIn}
                  handleLogin={this.handleLogin}
                  handleRegister={this.handleRegister}
                  handleLike={this.handleLike}
                />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                loggedIn={this.state.loggedIn}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <Register
                loggedIn={this.state.loggedIn}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />
            )}
          />
          <Route
            path="/savelist"
            render={() => <Savelist savelist={this.state.savelist} />}
          />
          <Route
            path="/review"
            render={() =>
              this.state.loggedIn ? <Review /> : <Redirect to="/" />
            }
          />
          <Route
            path="/contact"
            render={() =>
              this.state.loggedIn ? <Contact /> : <Redirect to="/" />
            }
          />
        </Switch>
      </React.Fragment>
    );
  }
}

// const MealtongApp = () => {
//   return (
//     <div>
//       <Header />
//       <Body />
//     </div>
//   );
// };

export default MealtongApp;
