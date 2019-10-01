import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faCommentAlt,
  faShare
} from '@fortawesome/free-solid-svg-icons';

class Total extends React.PureComponent {
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

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      colorLike: '#606770',
      countLike: this.props.dataStatus.total.countLike
    };
  }

  handleLike = (event) => {
    if (this.state.isLiked) {
      this.setState({ colorLike: '#606770' });
      this.setState((state) => ({
        countLike: state.countLike - 1
      }));
    } else {
      this.setState({ colorLike: '#0026ff' });
      this.setState((state) => ({
        countLike: state.countLike + 1
      }));
    }
    this.setState((state) => ({
      isLiked: !state.isLiked
    }));

    event.preventDefault();
  };

  render() {
    const { dataStatus } = this.props;
    const color = this.state.colorLike;
    const countLike = this.state.countLike;
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
            style={{ color: color }}
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
