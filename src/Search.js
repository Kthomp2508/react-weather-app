import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`The temperature in ${city} is 24°C`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control m-2"
          placeholder="Enter a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" class="btn btn-primary m-2" />
        <button type="submit" class="btn btn-success">
          Current
        </button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
