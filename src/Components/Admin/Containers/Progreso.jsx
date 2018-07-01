import Progreso from "../Presentational/Progreso";
import { connect } from "react-redux";

const mapStateToProps = state => {
  let newMov = Object.keys(state.movilizadores).map(key => {
    let movilizadoresObj = state.movilizadores[key];
    let movilizadoresWithId = {
      ...movilizadoresObj,
      movilizador_id: key
    };

    return movilizadoresWithId;
  });
  return {
    movilizadores: newMov
  };
};

const ConnectedProgreso = connect(mapStateToProps)(Progreso);

export default ConnectedProgreso;
