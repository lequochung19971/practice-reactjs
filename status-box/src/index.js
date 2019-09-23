import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { User } from "./components/users/user";
import { Status } from "./components/status/status";
import { Button } from "./components/others/btn-like-cmt";
import { Comments } from "./components/comment/comment";
import data from "./components/data.json";

let dataStatusBox = data;
class App extends React.Component {
  render() {
    return dataStatusBox.map((data, index) => {
      return (
        <article key={index.toString()} className="status-box">
          <User dataStatus={data}></User>
          <Status dataStatus={data}></Status>
          <Button dataStatus={data}></Button>
          <Comments dataStatus={data}></Comments>
        </article>
      );
    });
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
