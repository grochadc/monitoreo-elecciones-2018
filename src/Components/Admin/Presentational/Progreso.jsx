import React, { Component } from "react";
import { Link } from "@reach/router";
import { toId } from "../../../lib";

class Progreso extends Component {
  constructor() {
    super();
    this.state = {
      movilizadores: [
        {
          movilizador: "Adriana Garcia",
          id: "adriana_garcia",
          lastUpdated: new Date(),
          completed: [4, 20]
        },
        {
          movilizador: "Ana Elizabeth",
          lastUpdated: new Date(),
          completed: [9, 14]
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <table>
          <th>
            <td>Movilizador</td>
          </th>
          {this.props.movilizadores.map(item => {
            let { movilizador, voters } = item;
            let id = toId(movilizador)
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            return (
              <tr key={id}>
                <td>
                  <Link to={`movilizadores/${id}`}>{movilizador}</Link> [{
                    voters.filter(voter => {
                      return voter.confirmed;
                    }).length
                  }{" "}
                  / {voters.length}]
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
