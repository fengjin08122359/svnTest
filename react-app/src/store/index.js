import { createStore,applyMiddleware } from "redux";
// in productrion enviroment, you may need comment logger middleware
import Logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import reducer from "../reducer"; 

const store = createStore(
	reducer,
  window.example,
	applyMiddleware(ReduxThunk,Logger)
);
// console.log(store.getState())

export default {
  store: store,
  init () {
    this.store = createStore(
      reducer,
      window.example,
      applyMiddleware(ReduxThunk,Logger)
    );
  }
};