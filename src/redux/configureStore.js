import { createStore } from "redux";
import { initialState, Reducer } from "./reducer";

export const configureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
