import React from 'react';
import PropTypes from 'prop-types';

import Button from './btn-like-cmt';
import ShowCmt from './showCmt';

export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = (event) => {
    const { dataStatus } = this.props;
    const { value } = this.state;
    if (event.key === 'Enter') {
      const dataInput = {
        user: {
          avatar:
            'https://res.cloudinary.com/teepublic/image/private/s--tyDtW4Ra--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1531998036/production/designs/2910144_0.jpg',
          name: 'Hùng'
        },
        content: value
      };
      dataStatus.comment.push(dataInput);
      localStorage.setItem('statusBox', JSON.stringify(dataStatus));
      this.setState({ value: '' });

      event.preventDefault();
    }
  };

  render() {
    const { dataStatus } = this.props;
    const { value } = this.state;
    return (
      <form className="comments">
        <Button dataStatus={dataStatus} />
        <ShowCmt dataStatus={dataStatus} />
        <div className="comments__input">
          <input
            type="text"
            placeholder="Write a comment..."
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            value={value}
          />
        </div>
      </form>
    );
  }
}

Comments.propTypes = {
  dataStatus: PropTypes.object
};
