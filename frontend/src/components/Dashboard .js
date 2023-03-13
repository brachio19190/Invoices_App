// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { fetchInvoices } from "../redux/actions";
// import { getTotalAmount, getPendingInvoicesCount } from "../redux/selectors";

// const Dashboard = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const invoices = useSelector((state) => state.invoices);
//   const totalAmount = useSelector(getTotalAmount);
//   const pendingInvoicesCount = useSelector(getPendingInvoicesCount);

//   useEffect(() => {
//     const fetchInvoicesAsync = async () => {
//       const resp = await fetchInvoices();
//       console.log(resp);
//       setIsLoading(false);
//     };
//     fetchInvoicesAsync();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Total amount: {totalAmount}</p>
//       <p>Pending invoices count: {pendingInvoicesCount}</p>
//       <p>Total invoices count: {invoices.length}</p>
//     </div>
//   );
// };

// export default Dashboard;
