import React from 'react';
import { withRouter } from 'react-router-dom';

function PostData(apiUrl, userData) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/auth/${apiUrl}`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json'
      }
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
class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { errors: [], email: '', password: '', redirect: false };
  }

  showErr = (el, bool) => {
    this.setState((state) => ({
      errors: [...state.errors, { el, bool }]
    }));
  };

  onemailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  submitLogin = () => {
    const { email, password } = this.state;
    console.log({ email, password });
    if (email === '') {
      this.showErr('email', true);
    }
    if (password === '') {
      this.showErr('password', true);
    }

    if (email !== '' && password !== '') {
      PostData('login', { email, password }).then((result) => {
        const resJson = result;

        if (resJson.access_token) {
          localStorage.setItem('userData', JSON.stringify(resJson));
          // console.log(resJson);
          this.props.history.push('/home');
        } else {
          console.log('error');
        }
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
    let emailErr = false,
      passwordErr = false;
    const { errors } = this.state;
    for (const err of errors) {
      if (err.el === 'email') {
        emailErr = true;
      }
      if (err.el === 'password') {
        passwordErr = true;
      }
    }
    if (localStorage.getItem('userData')) {
      this.props.history.push('/home');
    }

    return (
      <div>
        <header>Login</header>
        <div className="box-input">
          <div className="input-group">
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={this.onemailChange}
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

export default withRouter(Login);
