function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVILIZADORES":
      return {
        movilizadores: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
