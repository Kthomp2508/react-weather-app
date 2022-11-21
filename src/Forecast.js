import React from "react";

import "./App.css";

export default function Forecast() {
  return (
    <div>
      <div className="container Forecast">
        <div className="item">Monday</div>
        <div className="item">Tuesday</div>
        <div className="item">Wednesday</div>
        <div className="item">Thursday</div>
        <div className="item">Friday</div>
        <div className="item">Saturday</div>
      </div>
      <div className="container Forecast">
        <span role="img" alt="sun emoji" aria-label="">
          ☀️
        </span>
        <span role="img" alt="sun emoji" aria-label="">
          ☀️
        </span>
        <span role="img" alt="sun emoji" aria-label="">
          ☀️
        </span>
        <span role="img" alt="sun emoji" aria-label="">
          ☀️
        </span>
        <span role="img" alt="sun emoji" aria-label="">
          ☀️
        </span>
        <span role="img" alt="sun emoji" aria-label="">
          ☀️
        </span>
      </div>
      <div className="container Forecast">
        <div className="ForecastHigh">20°</div>
        <div className="ForecastHigh">21°</div>
        <div className="ForecastHigh">15°</div>
        <div className="ForecastHigh">11°</div>
        <div className="ForecastHigh">12°</div>
        <div className="ForecastHigh">14°</div>
      </div>
      <div className="container Forecast">
        <div className="ForecastLow">9°</div>
        <div className="ForecastLow">10°</div>
        <div className="ForecastLow">7°</div>
        <div className="ForecastLow">3°</div>
        <div className="ForecastLow">1°</div>
        <div className="ForecastLow">2°</div>
      </div>
    </div>
  );
}
