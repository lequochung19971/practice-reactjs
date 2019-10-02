import React from 'react';

export default class Titles extends React.PureComponent {
  render() {
    return (
      <div className="weather__title">
        {/* <img src="https://source.unsplash.com/1600x900/?nature,weather" /> */}
        <div>
          <h1>Weather Finder</h1>
          <p>Find out temperature, condition and more...</p>
        </div>
      </div>
    );
  }
}
