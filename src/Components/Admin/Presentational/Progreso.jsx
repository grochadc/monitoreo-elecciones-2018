import React, { Component } from "react";
import { Link } from "@reach/router";
import { toId } from "../../../lib";

class Progreso extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Movilizador</th>
              <th style={{ paddingRight: "20px" }}>Progreso</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {this.props.movilizadores.map((item, i) => {
              let { movilizador, voters, movilizador_id } = item;
              let confirmed = voters.filter(voter => {
                return voter.confirmed;
              }).length;
              let total = voters.length;
              let finished = Boolean(confirmed === total);
              let id = toId(movilizador)
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
              this.finalTotal += total;
              return (
                <tr key={id}>
                  <td>
                    <Link to={`movilizadores/${movilizador_id}`}>
                      {movilizador}
                    </Link>
                  </td>
                  <td>
                    <span style={{ color: finished ? "green" : "red" }}>
                      [{confirmed} / {total}]
                    </span>{" "}
                  </td>
                  <td>
                    {item.lastUpdated
                      ? new Date(item.lastUpdated).getHours().toString() +
                        ":" +
                        new Date(item.lastUpdated).getMinutes().toString()
                      : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Progreso;
