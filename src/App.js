import React, { Component } from "react";
import { Router } from "@reach/router";
import axios from "axios";
import Selector from "./Components/Containers/Selector";
import Main from "./Components/Main";
import Clave from "./Components/Clave";
import Dashboard from "./Components/Admin/Dashboard";
import Movilizador from "./Components/Admin/Movilizador";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movilizadores: []
    };
  }
  componentDidMount() {
    let that = this;
    axios(
      "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/movilizadores/"
    ).then(({ data }) => {
      let db = data.result;
      that.props.setMovilizadores(db);
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Clave path="/" />
          <Selector path="/select" />
          <Main path="/votantes/:movilizador" />
          <Dashboard path="/huitzilopochtli" />
          <Movilizador path="/huitzilopochtli/movilizadores/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
