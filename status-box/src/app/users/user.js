import React from "react";

export class User extends React.Component {
  render() {
    return (
      <section className="user">
        <div className="user__avatar">
          <img src={this.props.dataStatus.user.avatar} alt=""></img>
        </div>
        <div className="user__name-time">
          <a href="https://www.facebook.com/quochung.le.1420">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industr
          </a>
          <p>11 hrs</p>
        </div>
      </section>
    );
  }
}
