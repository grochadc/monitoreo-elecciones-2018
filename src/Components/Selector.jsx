import React, { Component } from "react";
import { navigate, Link } from "@reach/router";
import db from "../db/newNewNewDb.json";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }
  handleSubmit() {
    if (!this.state.value) {
      alert("Por favor elige tu nombre");
    } else {
      navigate("/votantes/" + this.state.value);
    }
  }
  render() {
    return (
      <div className="Selector">
        Elige tu nombre:{" "}
        <select value={this.state.value} onChange={this.handleChange}>
          <option selected>Nombre</option>
          {db.map((obj, i) => {
            let id = Object.keys(obj)[0];
            let { movilizador } = obj[id];
            return (
              <option value={id} key={id}>
                {movilizador}
              </option>
            );
          })}
        </select>
        <button type="submit" onClick={() => this.handleSubmit()}>
          Entrar
        </button>
<Link to=/"huitzilopochtli ">admin</Link>
      </div>
    );
  }
}

export default Selector;
