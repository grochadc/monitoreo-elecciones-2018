import App from "./App";
import initMovilizadores from "./Redux/Actions.js";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    setMovilizadores: movilizadores =>
      dispatch(initMovilizadores(movilizadores))
  };
};

const ConnectedProgreso = connect(
  null,
  mapDispatchToProps
)(App);

export default ConnectedProgreso;
