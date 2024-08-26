const select = {
  ADD_CUSTOMER: "ADD_CUSTOMER",
  ADD_MANY_CUSTOMERS: "ADD_MANY_CUSTOMERS",
  REMOVE_CUSTOMERS: "REMOVE_CUSTOMERS",
};

const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case select.ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case select.ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case select.REMOVE_CUSTOMERS:
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
  type: select.ADD_CUSTOMER,
  payload,
});
export const addManyCustomerAction = (payload) => ({
  type: select.ADD_MANY_CUSTOMERS,
  payload,
});
export const removeCustomerAction = (payload) => ({
  type: select.REMOVE_CUSTOMERS,
  payload,
});
