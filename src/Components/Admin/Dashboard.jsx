import React, { Component } from "react";
import Progreso from "./Containers/Progreso";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Administrador</h1>
        <Progreso />
      </div>
    );
  }
}
export default Dashboard;
