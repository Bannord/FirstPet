import { createStore, combineReducers } from "redux";

import { cashReducer } from "../Reducers/cashReducers";
import { customersReducer } from "../Reducers/customersReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
