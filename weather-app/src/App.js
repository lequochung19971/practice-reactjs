import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '9da3e4e2b63698c4b34ab111fbf9904b';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      humid: undefined,
      description: undefined,
      error: undefined
    };
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    // const apiCall = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    // );
    // const data = await apiCall.json();
    // console.log(data);
    // let data;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          this.setState({
            temp: Math.floor(data.main.temp / 10),
            humid: data.main.humidity,
            error: data.cod,
            city: data.name,
            description: data.weather[0].description,
            country: data.sys.country
          });
        }
        if (data.cod === '404') {
          this.setState({
            error: data.cod
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { temp, humid, city, error, description, country } = this.state;
    return (
      <div className="weather">
        <Titles />
        <div className="weather-content">
          <Form getWeather={this.getWeather} />
          <Weather
            temp={temp}
            humid={humid}
            city={city}
            country={country}
            description={description}
            error={error}
          />
        </div>
      </div>
    );
  }
}

export default App;
