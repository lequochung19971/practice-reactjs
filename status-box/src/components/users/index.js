import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  render() {
    const { dataStatus } = this.props;
    return (
      <section className="user">
        <div className="user__avatar">
          <img src={dataStatus.user.avatar} alt="user" />
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

User.propTypes = {
  dataStatus: PropTypes.object
};
