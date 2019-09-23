import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <section className="comment">
        <div className="comment__user-avatar">
          <img src={this.props.avatar} alt="avatar"></img>
        </div>
        <div className="comment__description">
          <p className="comment__description-text">
            <a
              href="https://www.facebook.com/quochung.le.1420"
              className="comment__description-username"
            >
              {this.props.name}{" "}
            </a>
            {this.props.content}
          </p>
        </div>
      </section>
    );
  }
}

class ShowCmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkShowAll: false };
  }

  handlePrevious = event => {
    this.setState({ checkShowAll: true });
    event.preventDefault();
  };

  render() {
    const dataStatus = this.props.dataStatus;
    const lengthCMT = dataStatus.comment.length;
    let lengthShow;
    let Previous = "";
    if (lengthCMT > 3 && this.state.checkShowAll === false) {
      lengthShow = lengthCMT - 3;
      Previous = (
        <a
          href="c"
          className="comments__previous"
          onClick={this.handlePrevious}
        >
          View previous comments
        </a>
      );
    } else lengthShow = 0;

    return (
      <div>
        {Previous}
        {dataStatus.comment.slice(lengthShow, lengthCMT).map((value, index) => {
          return (
            <Comment
              key={index.toString()}
              avatar={value.user.avatar}
              name={value.user.name}
              content={value.content}
            ></Comment>
          );
        })}
      </div>
    );
  }
}

export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = event => {
    const dataStatus = this.props.dataStatus;
    console.log(dataStatus);
    if (event.key === "Enter") {
      console.log(this.state.value);
      const dataInput = {
        user: {
          avatar:
            "https://res.cloudinary.com/teepublic/image/private/s--tyDtW4Ra--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1531998036/production/designs/2910144_0.jpg",
          name: "Hùng"
        },
        content: this.state.value
      };
      dataStatus.comment.push(dataInput);
      localStorage.setItem("statusBox", JSON.stringify(dataStatus));
      this.setState({ value: "" });

      event.preventDefault();
    }
  };

  render() {
    const dataStatus = this.props.dataStatus;
    return (
      <form className="comments">
        <ShowCmt dataStatus={dataStatus}></ShowCmt>
        <div className="comments__input">
          <input
            type="text"
            placeholder="Write a comment..."
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            value={this.state.value}
          ></input>
        </div>
      </form>
    );
  }
}
