import React from 'react';

export default class Form extends React.PureComponent {
  render() {
    // const { getWeather } = this.props;
    return (
      <form
        onSubmit={this.props.getWeather}
        className="weather__location-input"
      >
        <div>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <br />
          <button type="submit">Get weather</button>
        </div>
      </form>
    );
  }
}
