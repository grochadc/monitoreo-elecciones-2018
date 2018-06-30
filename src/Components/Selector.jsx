import React, { Component } from "react";
import { navigate } from "@reach/router";
import db from "../db/newDb.json";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }
  handleSubmit() {
    navigate("/votantes/" + this.state.value);
  }
  render() {
    return (
      <div className="Selector">
        Elige tu nombre:{" "}
        <select value={this.state.value} onChange={this.handleChange}>
          {db.map((obj, i) => <option value={i}>{obj.movilizador}</option>)}
        </select>
        <button type="submit" onClick={() => this.handleSubmit()}>
          Entrar
        </button>
      </div>
    );
  }
}

export default Selector;
