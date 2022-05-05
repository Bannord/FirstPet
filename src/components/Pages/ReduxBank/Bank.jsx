import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../UI/button/MyButton";

import "./Bank.scss";

export default function Bank() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="bank_btn">
      <h2>{cash}</h2>
      <MyButton onClick={() => addCash(Number(prompt()))}>
        Положить деньги
      </MyButton>
      <MyButton onClick={() => getCash(Number(prompt()))}>
        Снять деньги
      </MyButton>
    </div>
  );
}
