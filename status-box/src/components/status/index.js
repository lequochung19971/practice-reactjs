import React from 'react';
import PropTypes from 'prop-types';

export class Status extends React.Component {
  render() {
    const { dataStatus } = this.props;
    return (
      <section className="status">
        <div className="status__text">{dataStatus.status.text}</div>
        <div className="status__img">
          <img src={dataStatus.status.images} alt="pictures" />
        </div>
      </section>
    );
  }
}

Status.propTypes = {
  dataStatus: PropTypes.object
};
