import React, { Component } from "react";
import axios from "axios";
import { toCapital, toId } from "../lib";
import VoterList from "./VoterList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voters: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let url =
      "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/movilizadores/" +
      this.props.movilizador;
    axios(url)
      .then(({ data }) => {
        let { result } = data;
        let { voters } = result;
        let newvoters = voters.map(voter => {
          let { name, confirmed } = voter;
          return {
            name,
            id: toId(name),
            confirmed: confirmed
          };
        });
        this.setState({ voters: newvoters });
      })
      .catch(err => console.log(err));
  }
  handleInputChange(event) {
    let { name } = event.target;
    this.setState(prevState => {
      return {
        voters: [
          ...prevState.voters.map((voter, i) => {
            // eslint-disable-next-line
            if (i != name) {
              return voter;
            } else {
              return {
                ...voter,
                confirmed: !voter.confirmed
              };
            }
          })
        ]
      };
    });
  }
  handleClick() {
    let url = `https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/movilizadores/${
      this.props.movilizador
    }`;
    let updated = {
      movilizador: toCapital(this.props.movilizador),
      voters: this.state.voters,
      lastUpdated: new Date()
    };
    axios.put(url, updated);
    alert("Informacion Guardada");
  }
  render() {
    return (
      <div className="Main">
        <h1>{toCapital(this.props.movilizador)}</h1>
        {this.state.voters.length ? (
          <VoterList
            handleInputChange={this.handleInputChange}
            voters={this.state.voters}
          />
        ) : (
          "Loading..."
        )}
        <div>
          <button onClick={this.handleClick}>Guardar</button>
        </div>
      </div>
    );
  }
}

export default Main;
