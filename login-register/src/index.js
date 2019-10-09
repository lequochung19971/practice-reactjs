import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: true,
      displayRegister: false
    };
  }

  showLogin = () => {
    this.setState({ displayLogin: true, displayRegister: false });
  };

  showRegister = () => {
    this.setState({ displayLogin: false, displayRegister: true });
  };

  render() {
    const { displayLogin, displayRegister } = this.state;
    return (
      <Router>
        <div className="root-container">
          <Switch>
            <Route exact path="/home" component={Home} />

            <Route exact path="/">
              <div className="box-controller">
                <button
                  className={`btn-controller${displayLogin ? ' selected' : ''}`}
                  onClick={this.showLogin}
                  type="button"
                >
                  Login
                </button>
                <button
                  type="button"
                  className={`btn-controller${
                    displayRegister ? ' selected' : ''
                  }`}
                  onClick={this.showRegister}
                >
                  Register
                </button>
              </div>
              <div className="box-container">
                {displayLogin && (
                  <section className="login">
                    <Login handleRedirect={this.handleRedirect} />
                  </section>
                )}
                {displayRegister && (
                  <section className="register">
                    <Register />
                  </section>
                )}
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
