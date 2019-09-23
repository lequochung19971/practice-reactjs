import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { User } from "./app/users/user";
import { Status } from "./app/status/status";
import { Button } from "./app/others/btn-like-cmt";
import { Comments } from "./app/comment/comment";
import data from "./app/data.json";

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
