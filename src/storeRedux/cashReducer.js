const defaultState = {
  cash: 0,
};
const select = {
  ADD_CASH: "ADD_CASH",
  GET_CASH: "GET_CASH",
  ADD_CUSTOMER: "ADD_CUSTOMER",
  GET_CUSTOMERS: "GET_CUSTOMERS",
};

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case select.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case select.GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
