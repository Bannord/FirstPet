const defaultState = {
  customers: [],
};

const ADD_CUSTOMERS = "ADD_CUSTOMERS";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";
const GET_CUSTOMERS = "GET_CUSTOMERS";

export const customersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };

    case ADD_CUSTOMERS:
      return { ...state, customers: [...state.customers, action.payload] };

    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMERS,
  payload,
});
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMERS,
  payload,
});

export const getCustomersAction = (payload) => ({
  type: GET_CUSTOMERS,
  payload,
});
