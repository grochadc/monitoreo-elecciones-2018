import Progreso from "../Presentational/Progreso";
import { connect } from "react-redux";

const mapStateToProps = state => {
  let newMov = Object.keys(state.movilizadores).map(key => {
    return state.movilizadores[key];
  });
  return {
    movilizadores: newMov
  };
};

const ConnectedProgreso = connect(mapStateToProps)(Progreso);

export default ConnectedProgreso;
