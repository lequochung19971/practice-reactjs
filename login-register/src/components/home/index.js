import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (localStorage.getItem('userData')) {
      console.log('Ton tai user');
      this.props.history.push('/home');
    } else {
      this.props.history.push('/');
    }
  }

  logout = () => {
    localStorage.setItem('userData', '');
    localStorage.clear();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Home nè</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Home);
