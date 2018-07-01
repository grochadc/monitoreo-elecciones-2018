import Main from "../Presentational/Main";
import { connect } from "react-redux";

const mapStateToProps = state => {
  let newMov = Object.keys(state.movilizadores).map(key => {
    return state.movilizadores[key];
  });
  return {
    movilizadores: newMov
  };
};

const ConnectedMain = connect(mapStateToProps)(Main);

export default ConnectedMain;
