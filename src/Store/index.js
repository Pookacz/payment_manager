import { createStore } from "redux";
import paymentsApp from "../Reducers/index";

const store = createStore(
  paymentsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
