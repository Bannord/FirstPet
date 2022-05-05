import React from "react";
import { createStore } from "redux";

export default function index() {
  const defaultState = {
    cash: 0,
  };

  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_CASH":
        return { ...state, cash: state.cash + action.payload };

      case "GET_CASH":
        return { ...state, cash: state.cash - action.payload };

      default:
        return state;
    }
  };

  const state = createStore(reducer);

  return <div>index</div>;
}
