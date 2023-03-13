import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateInvoice, deleteInvoice } from '../redux/actions';
import AddInvoiceForm from './AddInvoiceForm ';
import { fetchInvoices } from "../redux/actions";

function InvoicesList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const invoices = useSelector(state => state.invoices || []);
  const [dataToEdit, setDataToEdit] = React.useState(null);

  const fetchInvoicesAsync = async () => {
    dispatch(fetchInvoices());
    // console.log(x);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInvoicesAsync();
  }, []);

  const handleEdit = invoice => {
    setDataToEdit(invoice);
  };

  const handleDelete = id => {
    dispatch(deleteInvoice(id));
  };

  return (
    <div>
      <h2>Invoices List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={`${invoice.id}_${index}`}>
              <td>{invoice.id}</td>
              <td>{invoice.date}</td>
              <td>{invoice.status}</td>
              <td>{invoice.amount}</td>
              <td>
                <button onClick={() => handleEdit(invoice)}>Edit</button>
                <button onClick={() => handleDelete(invoice.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {dataToEdit && <AddInvoiceForm dataToEdit={dataToEdit} />}
    </div>
  );
}

export default InvoicesList;
