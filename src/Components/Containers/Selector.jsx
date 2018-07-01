import Selector from "../Presentational/Selector";
import { connect } from "react-redux";

const mapStateToProps = state => {
  let movilizadores = Object.keys(state.movilizadores).map((movilizador, i) => {
    let movilizadorId = Object.keys(state.movilizadores)[i];
    return {
      [movilizadorId]: state.movilizadores[movilizador]
    };
  });
  console.log("Movilizadores from state ", movilizadores);
  return { movilizadores };
};

const ConnectedSelector = connect(mapStateToProps)(Selector);

export default ConnectedSelector;
