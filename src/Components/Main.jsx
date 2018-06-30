import React, { Component } from "react";
import { toId } from "../lib";
import db from "../db/newDb.json";

class Main extends Component {
  constructor(props) {
    super(props);
    let newvoters = db[props.movilizador].voters.map(voter => {
      return { name: voter, id: toId(voter) };
    });
    this.state = {
      voters: newvoters
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="Main">
        <h1>{db[this.props.movilizador].movilizador}</h1>
        <ul>
          {this.state.voters.map(voter => (
            <li key={voter.id}>
              <input
                type="checkbox"
                name={voter.id}
                value={voter.id}
                onChange={e => this.setState({ [voter.id]: true })}
              />{" "}
              {voter.name}
            </li>
          ))}
          <button>Guardar</button>
        </ul>
      </div>
    );
  }
}

export default Main;
