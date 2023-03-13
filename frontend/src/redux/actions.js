import * as actions from "../services/api";
// Define action types
export const FETCH_INVOICES = "FETCH_INVOICES";
export const ADD_INVOICE = "ADD_INVOICE";
export const UPDATE_INVOICE = "UPDATE_INVOICE";
export const DELETE_INVOICE = "DELETE_INVOICE";

// Define action creators
export function addInvoice(invoice) {
  return {
    type: ADD_INVOICE,
    payload: invoice
  };
}

export function updateInvoice(id, invoice) {
  return dispatch => actions.updateInvoice(id, invoice).then(() => {
    // const invoices = response.data;
    dispatch({
      type: UPDATE_INVOICE,
      payload: {
        id,
        invoice
      }
    });
    dispatch(actions.GetInvoices());
  }).catch(error => {
    console.log(error);
  });
  // return {
  //   type: UPDATE_INVOICE,
  //   payload: {
  //     id,
  //     invoice
  //   }
  // };
}

export function deleteInvoice(id) {
  return {
    type: DELETE_INVOICE,
    payload: id
  };
}

export const fetchInvoices = () => {
  return dispatch => actions.GetInvoices().then(invoices => {
    // const invoices = response.data;
    dispatch({ type: FETCH_INVOICES, payload: invoices || {} });
    return invoices;
  }).catch(error => {
    console.log(error);
  });
};
// };
