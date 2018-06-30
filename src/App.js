import React, { Component } from "react";
import { Router } from "@reach/router";
import Selector from "./Components/Selector";
import Main from "./Components/Main";
import Clave from "./Components/Clave";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Clave path="/" />
          <Selector path="/select" />
          <Main path="/votantes/:movilizador" />
        </Router>
      </div>
    );
  }
}

export default App;
