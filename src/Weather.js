import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [wind, setWind] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");

  function displayWeather(response) {
    setTemperature(response.data.main.temp);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
      <ul>
        <li>Temperature is {Math.round(temperature)}°C</li>
        <li> {description}</li>
        <li>Humidity is {humidity}%</li>
        <li>Wind is {wind}km/h</li>
        <li>
          <img src={icon} alt={description} />
        </li>
      </ul>
      <div>
        <a
          href="https://github.com/sofiafpdferreira/week-10-sofiaff"
          target="_blank"
          alt="source code"
        >
          {" "}
          Open source code
        </a>
      </div>
    </div>
  );
}
