import { addManyCustomerAction } from "../storeRedux/customersReducer";

export const fetchCustomers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(addManyCustomerAction(data)));
  };
};
