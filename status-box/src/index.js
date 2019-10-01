import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { User } from './components/users';
import { Status } from './components/status';
import { Comments } from './components/comment/';
import data from './components/data.json';

const dataStatusBox = data;
class App extends React.Component {
  render() {
    return dataStatusBox.map((data, index) => {
      return (
        <article key={index.toString()} className="status-box">
          <User dataStatus={data} />
          <Status dataStatus={data} />
          <Comments dataStatus={data} />
        </article>
      );
    });
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
