// import { useState } from "react";
// import { updateInvoice } from "../services/api";
// import { useDispatch } from 'react-redux';

// export default function InvoiceForm({ invoice }) {
//   const [customer, setCustomer] = useState(invoice?.customer || "");
//   const dispatch = useDispatch();
//   const [date, setDate] = useState(invoice?.date || "");
//   const [amount, setAmount] = useState(invoice?.amount || "");
//   const [selectedInvoice, setSelectedInvoice] = useState(invoice);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // call API to update invoice and handle response
//     const updatedInvoice = dispatch(updateInvoice(invoice.id, { customer, date, amount }));
//     setSelectedInvoice(updatedInvoice);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Customer:
//         <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
//       </label>
//       <label>
//         Date:
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       </label>
//       <label>
//         Amount:
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       </label>
//       <button type="submit">Update</button>
//     </form>
//   );
// }
