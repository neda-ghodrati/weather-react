import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
export default function Form() {
  let [city, setCity] = useState("");

  let [weather, setWeather] = useState({});
  function showInfo(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "0dfb1eea5df6a4969c179ad0edfab896";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showInfo);
  }

  function catchCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <span className="body">
        <div className="Form">
          <br />
          <p>Weather App</p>
          <form onSubmit={handleSubmit}>
            <input
              type="Search"
              onChange={catchCity}
              placeholder="Enter a city.."
              autoFocus={false}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <br />

        <strong> {city}</strong>
        <ul>
          <li>
            {" "}
            <strong>Temperature:</strong> {Math.round(weather.temperature)} °C
          </li>
          <li>
            {" "}
            <strong>Description:</strong> {weather.description}{" "}
          </li>
          <li>
            {" "}
            <strong>Humidity: </strong>
            {Math.round(weather.humidity)} %{" "}
          </li>
          <li>
            {" "}
            <strong>Wind:</strong> {Math.round(weather.wind)} km/h
          </li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather Icon" rel="noreferrer" />{" "}
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-2">
              {" "}
              Sat
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png "
                alt=""
              />
              <br />
              18 °c
            </div>
            <div className="col-2">
              {" "}
              Sun{" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain.png"
                alt=""
              />
              <br />
              12 °c
            </div>
            <div className="col-2">
              {" "}
              Mon
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt=""
              />
              <br />
              14 °c
            </div>
            <div className="col-2">
              {" "}
              Tue{" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt=""
              />
              <br />
              13 °c
            </div>
            <div className="col-2">
              {" "}
              Wed{" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt=""
              />
              <br />
              14 °c
            </div>
          </div>
        </div>
      </span>
      <small>
        <a
          href="https://github.com/neda-ghodrati/Vanilla-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source code
        </a>
        by N.Gh.T
      </small>
    </div>
  );
}
