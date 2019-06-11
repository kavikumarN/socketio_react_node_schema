import React from "react";
import "./App.css";

import SimpleDealingRates from "./SimpleDealingRates";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SimpleDealingRates
          className="simpledealingrates"
          id="simpledealingrates"
        />
      </div>
    );
  }
}

export default App;
