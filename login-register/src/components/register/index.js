import React from 'react';

export default class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { errors: [], username: '', password: '', email: '' };
  }

  showErr = (el, bool) => {
    this.setState((state) => ({
      errors: [...state.errors, { el, bool }]
    }));
  };

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  submitRegister = () => {
    const { username, password, email } = this.state;
    if (username === '') {
      this.showErr('username', true);
    }
    if (password === '') {
      this.showErr('password', true);
    }
    if (email === '') {
      this.showErr('email', true);
    }
  };

  render() {
    let usernameErr = false,
      passwordErr = false,
      emailErr = false;
    const { errors } = this.state;
    for (const err of errors) {
      if (err.el === 'username') {
        usernameErr = true;
      }
      if (err.el === 'password') {
        passwordErr = true;
      }
      if (err.el === 'email') {
        emailErr = true;
      }
    }

    return (
      <div>
        <header>Register</header>
        <div className="box-input">
          <div className="input-group">
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.onUsernameChange}
                className={usernameErr ? 'error' : ''}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onEmailChange}
                className={emailErr ? 'error' : ''}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onPasswordChange}
                className={passwordErr ? 'error' : ''}
              />
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn-submit"
          onClick={this.submitRegister}
        >
          Register
        </button>
      </div>
    );
  }
}
