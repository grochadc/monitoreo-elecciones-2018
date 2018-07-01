import Progreso from "../Presentational/Progreso";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    movilizadores: state.movilizadores
  };
};

const ConnectedProgreso = connect(mapStateToProps)(Progreso);

export default ConnectedProgreso;
