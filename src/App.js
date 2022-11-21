import './App.css';
import Search from "./Search";
import Grid from "./Grid";
import Forecast from "./Forecast";
import React from 'react';


function App() {
  return (
    <div className="App">
      <Grid />
      <Search />
      <hr />
      <h4>
        Next 6 days
        <br />
        🌡️
      </h4>
      <Forecast />
    </div>
  );
}

export default App;
