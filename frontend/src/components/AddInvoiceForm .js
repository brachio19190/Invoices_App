import React from 'react';
import { useDispatch } from 'react-redux';
import { addInvoice, updateInvoice } from '../redux/actions';

function AddInvoiceForm({ dataToEdit }) {
  const dispatch = useDispatch();
  const [id, setId] = React.useState('');
  const [date, setDate] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');

  React.useEffect(() => {
    if (dataToEdit) {
      setId(dataToEdit.id);
      setDate(dataToEdit.date);
      setStatus(dataToEdit.status);
      setAmount(dataToEdit.amount);
    }
  }, [dataToEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(updateInvoice(id, { date, status, amount }));
    // console.log('updated invoice: ', updatedInvoice);
    // dispatch(updatedInvoice ? updateInvoice(dataToEdit.id, updatedInvoice) : addInvoice({ id, date, status, amount }));
    setId('');
    setDate('');
    setStatus('');
    setAmount('');
  };

  return (
    <div>
      <h2>{dataToEdit ? 'Update Invoice' : 'Add Invoice'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id:</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <label htmlFor="status">Status:</label>
        <input
          id="status"
          type="text"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit">{dataToEdit ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default AddInvoiceForm;
