import { getCustomersAction } from "../Reducers/customersReducer";

export const fetchCustomers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getCustomersAction(json)));
  };
};
