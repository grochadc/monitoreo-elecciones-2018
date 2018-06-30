import React, { Component } from "react";
import update from "immutability-helper";
import { toId } from "../lib";
import db from "../db/newNewDb.json";

class Main extends Component {
  constructor(props) {
    super(props);
    let newvoters = db[props.movilizador].voters.map(voter => {
      return {
        name: voter.name,
        id: toId(voter.name),
        confirmed: voter.confirmed
      };
    });
    this.state = {
      voters: newvoters
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInputChange(event) {
    let { name } = event.target;
    this.setState(prevState => {
      return {
        voters: [
          ...prevState.voters.map((voter, i) => {
            if (i != name) {
              return voter;
            } else {
              return {
                ...voter,
                confirmed: true
              };
            }
          })
        ]
      };
    });
  }
  handleClick() {
    console.log(this.state.voters.filter(voter => voter.confirmed));
    alert("Clicked");
  }
  render() {
    return (
      <div className="Main">
        <h1>{db[this.props.movilizador].movilizador}</h1>
        <ul>
          {this.state.voters.map(
            (voter, i) => (
              <li key={voter.id}>
                <input
                  type="checkbox"
                  name={i}
                  checked={voter.confirmed}
                  onChange={event => this.handleInputChange(event)}
                />{" "}
                {voter.name}
              </li>
            ),
            this
          )}
          <button onClick={this.handleClick}>Guardar</button>
        </ul>
      </div>
    );
  }
}

export default Main;
