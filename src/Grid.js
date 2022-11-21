import React from "react";
import City from "./City";
import DateTime from "./DateTime";
import Weather from "./Weather";
import Temperature from "./Temperature";

import './App.css';

export default function Grid() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <City />
          <DateTime />
          <Weather />
          <Temperature className="Temp" />
        </div>
        <div className="col-md-6">
          <div>Humidity: 96%</div>
          <div>Wind:2 km/h</div>
        </div>
      </div>
    </div>
  );
}
