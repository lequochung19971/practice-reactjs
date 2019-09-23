import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentAlt,
  faShare
} from "@fortawesome/free-solid-svg-icons";

class Total extends React.Component {
  render() {
    return (
      <section className="total">
        <span className="total__like">{this.props.countLike} Likes </span>
        <div className="total__cmt-share">
          <span className="total__cmt">{this.props.countCmt} Comments </span>
          <span className="total__share">{this.props.countShare} Shares</span>
        </div>
      </section>
    );
  }
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.dataStatus.status.checkbeLike
    };
  }

  handleLike = event => {
    this.setState(state => ({
      isLiked: !state.isLiked
    }));
    if (this.state.isLiked) {
      this.props.dataStatus.total.countLike -= 1;
    } else {
      this.props.dataStatus.total.countLike += 1;
    }
    event.preventDefault();
  };

  render() {
    let colorLike;
    const dataStatus = this.props.dataStatus;
    if (this.state.isLiked) {
      colorLike = { color: "#0026ff" };
      dataStatus.status.checkbeLiked = true;
      dataStatus.total.countLike += 1;
    } else {
      colorLike = { color: "#606770" };
      dataStatus.status.checkbeLiked = false;
      dataStatus.total.countLike -= 1;
    }
    let countLike = dataStatus.total.countLike;
    let countCmt = dataStatus.comment.length;
    let countShare = dataStatus.total.countShare;

    return (
      <div>
        <Total
          countLike={countLike}
          countCmt={countCmt}
          countShare={countShare}
        ></Total>
        <div className="button">
          <a
            href="c"
            className="button__like"
            onClick={this.handleLike}
            style={colorLike}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Like
          </a>
          <a href="c" className="button__cmt">
            <FontAwesomeIcon icon={faCommentAlt} /> Comment
          </a>
          <a href="c" className="button__share">
            <FontAwesomeIcon icon={faShare} /> Share
          </a>
        </div>
      </div>
    );
  }
}
