import React, { useEffect, useState } from "react";
import BASE_URL from "../../API";

const TransactionList = ({ token }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`${BASE_URL}/transaction/read`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, 
          },
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await response.json();
        
        if (data.status === "success") {
          setTransactions(data.data.transactions); 
        } else {
          setError("No transactions found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [token]); 

  if (loading) {
    return <p>Loading transactions...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h3 style={{marginBottom:20}}>Transaction List</h3>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Wallet Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.amount}</td>
              <td>{transaction.walletType}</td>
              <td>{new Date(transaction.timestamp).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
