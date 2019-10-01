import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  const { avatar, name, content } = props;
  return (
    <section className="comment">
      <div className="comment__user-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="comment__description">
        <p className="comment__description-text">
          <a
            href="https://www.facebook.com/quochung.le.1420"
            className="comment__description-username"
          >
            {name}
          </a>
          &nbsp;
          {content}
        </p>
      </div>
    </section>
  );
}

export default class ShowCmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkShowAll: false };
  }

  handlePrevious = (event) => {
    this.setState({ checkShowAll: true });
    event.preventDefault();
  };

  render() {
    const { dataStatus } = this.props;
    const { checkShowAll } = this.state;
    const lengthCMT = dataStatus.comment.length;
    let lengthShow;
    let Previous = '';
    if (lengthCMT > 3 && checkShowAll === false) {
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
            />
          );
        })}
      </div>
    );
  }
}

ShowCmt.propTypes = {
  dataStatus: PropTypes.object
};

Comment.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string
};
