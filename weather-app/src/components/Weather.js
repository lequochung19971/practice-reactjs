import React from 'react';

export default class Weather extends React.PureComponent {
  render() {
    const { temp, humid, city, error, description, country } = this.props;
    console.log(error);
    return (
      <div className="weather__info">
        {error === 200 && (
          <div>
            <p>
              <span>Location:</span> {city}, {country}
            </p>
            <p>
              <span>Temperature:</span> {temp}
            </p>
            <p>
              <span>Humidity:</span> {humid}
            </p>
            <p>
              <span>Description:</span> {description}
            </p>
          </div>
        )}
        {error === '404' && (
          <div className="weather__not-found">Not found!</div>
        )}
      </div>
    );
  }
}
