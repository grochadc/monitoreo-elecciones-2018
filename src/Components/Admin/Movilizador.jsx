import React, { Component } from "react";
import axios from "axios";
import { toCapital } from "../../lib";
import VoterListR from "./Presentational/VoterListR";

class Movilizador extends Component {
  constructor() {
    super();
    this.state = {
      voters: []
    };
  }
  componentDidMount() {
    let that = this;
    let url =
      "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/movilizadores/" +
      this.props.id;
    axios(url)
      .then(({ data }) => {
        let { voters } = data.result;
        console.log(voters);
        that.setState({
          voters
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <h1>{toCapital(this.props.id)}</h1>
        <VoterListR voters={this.state.voters} />
      </div>
    );
  }
}

export default Movilizador;
