import React from 'react';

function PostData(userData) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
      .then((respone) => respone.json())
      .then((responeJson) => {
        resolve(responeJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { errors: [], username: '', password: '' };
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

  submitLogin = () => {
    const { username, password } = this.state;
    if (username === '') {
      this.showErr('username', true);
    }
    if (password === '') {
      this.showErr('password', true);
    }

    if (username !== '' && password !== '') {
      PostData({ username, password }).then((result) => {
        const resJson = result;
        console.log(resJson);
      });
    }
  };

  // login = () => {
  //   this.PostData().then((result) => {
  //     const res = result;
  //     console.log(res);
  //   });
  // };

  render() {
    let usernameErr = false,
      passwordErr = false;
    const { errors } = this.state;
    for (const err of errors) {
      if (err.el === 'username') {
        usernameErr = true;
      }
      if (err.el === 'password') {
        passwordErr = true;
      }
    }
    return (
      <div>
        <header>Login</header>
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
          <button
            type="button"
            className="btn-submit"
            onClick={this.submitLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
