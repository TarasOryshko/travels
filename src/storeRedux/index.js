import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customersReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const root = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
