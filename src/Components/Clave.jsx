import React, { Component } from "react";
import { navigate } from "@reach/router";

class Clave extends Component {
  constructor() {
    super();
    this.state = {
      password: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    if (this.state.password === "mvz") {
      alert("Clave Correcta");
      navigate("/select");
    } else {
      alert("Clave Incorrecta");
    }
  }
  render() {
    return (
      <div>
        Clave de acceso:{" "}
        <input
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={() => this.handleSubmit()}>Entrar</button>
      </div>
    );
  }
}

export default Clave;
