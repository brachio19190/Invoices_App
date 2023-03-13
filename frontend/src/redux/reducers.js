
    import { FETCH_INVOICES, ADD_INVOICE, UPDATE_INVOICE } from './actions';

const initialState = {
  invoices: [],
  loading: false,
  error: null,
};

const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVOICES:
      return {
        ...state,
        invoices: action.payload,
        loading: false,
      };
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
    case UPDATE_INVOICE:
      const updatedInvoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload.id) {
          return {
            ...invoice,
            ...action.payload,
          };
        }
        return invoice;
      });
      return {
        ...state,
        invoices: updatedInvoices,
      };
    default:
      return state;
  }
};

export default invoicesReducer;