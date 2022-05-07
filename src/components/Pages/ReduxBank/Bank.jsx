import React from "react";

import { useDispatch, useSelector } from "react-redux";

import MyButton from "../../UI/button/MyButton";

import { addCashAction, getCashAction } from "./Reducers/cashReducers";

import {
  addCustomerAction,
  removeCustomerAction,
} from "./Reducers/customersReducer";

import "./Bank.scss";
import { fetchCustomers } from "./asyncAction/customers";

export default function Bank() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customers = {
      name,
      id: Date.now(),
    };

    dispatch(addCustomerAction(customers));
  };

  const removeCustomers = (customers) => {
    dispatch(removeCustomerAction(customers.id));
  };

  return (
    <div className="bank_btn">
      <h2 className="cash">{cash}</h2>
      <MyButton onClick={() => addCash(Number(prompt()))}>
        Положить деньги
      </MyButton>
      <MyButton onClick={() => getCash(Number(prompt()))}>
        Снять деньги
      </MyButton>
      <MyButton onClick={() => addCustomer(prompt())}>
        Добавить пользователя
      </MyButton>
      <MyButton onClick={() => dispatch(fetchCustomers())}>
        Получить клиентов из базы
      </MyButton>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              className="customer_title"
              onClick={() => removeCustomers(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div className="customer_title">нет пользователей !</div>
      )}
    </div>
  );
}
