const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all invoices
export const GetInvoices = async () => {
  console.log("come");
  const response = await fetch(`http://localhost:54903/api/Invoices/GetInvoices`);
  const data = await response.json();
  return data;
};

// Add a new invoice
export const addInvoice = async invoice => {
  const response = await fetch(`http://localhost:54903/api/Invoices/InsertInvoice?data=rge&status=wow2&amount=68}/invoices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invoice),
  });
  const data = await response.json();
  return data;
};

// Update an existing invoice
export const updateInvoice = async (id, invoice) => {
  const response = await fetch(`http://localhost:54903/api/Invoices/UpdateInvoiceById?id=${id}`, {
    method: 'PUT',
    payload: { ...invoice },
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invoice),
  });
  const data = await response.json();
  return data;
};

// Delete an invoice
export const deleteInvoice = async id => {
  const response = await fetch(`http://localhost:54903/api/Invoices/DeleteInvoice?id=${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
