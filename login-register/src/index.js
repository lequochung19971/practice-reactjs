import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Login from './components/login';
import Register from './components/register';

// import './index.css';
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
      <div className="root-container">
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
            className={`btn-controller${displayRegister ? ' selected' : ''}`}
            onClick={this.showRegister}
          >
            Register
          </button>
        </div>
        <div className="box-container">
          {displayLogin && (
            <section className="login">
              <Login />
            </section>
          )}
          {displayRegister && (
            <section className="register">
              <Register />
            </section>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
