import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import InvoicesList from './components/InvoicesList ';
import AddInvoiceForm from './components/AddInvoiceForm ';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Customer Invoices App</h1>
        <InvoicesList />
        <AddInvoiceForm />
      </div>
    </Provider>
  );
}

export default App;
