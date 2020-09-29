import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import { searchRobots, requestRobots } from "./container/reducers";
import { createLogger } from "redux-logger";
import thunkmiddleware from "redux-thunk";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkmiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* add store to the provider so that it will pass down to all the components in App  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
