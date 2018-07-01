import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./ConnectedApp";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Redux/reducer";

const initialState = {
  movilizadores: {}
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
