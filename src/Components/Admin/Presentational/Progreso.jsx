import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class Progreso extends Component {
  constructor() {
    super();
    this.state = {
      movilizadores: [
        {
          name: "Adriana Garcia",
          id: "adriana_garcia",
          lastUpdated: new Date(),
          completed: [4, 20]
        },
        { name: "Ana Elizabeth", lastUpdated: new Date(), completed: [9, 14] }
      ]
    };
  }
  render() {
    return (
      <div>
        <table>
          <th>
            <td>Movilizador</td>
            <td>Completados</td>
            <td>Hora</td>
          </th>
          {this.state.movilizadores.map(movilizador => {
            let { name, lastUpdated, completed, id } = movilizador;

            return (
              <tr key={id}>
                <td>
                  <Link to={`movilizadores/${id}`}>{name}</Link>
                </td>
                <td>
                  [{completed[0]} / {completed[1]}]
                </td>
                <td>
                  {lastUpdated.getHours().toString()}:{lastUpdated
                    .getMinutes()
                    .toString()}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Progreso;
