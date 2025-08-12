import React from 'react';
import './TransactionList.css';
import { formatCurrency } from '../../utils/currencyFormatter';
function TransactionList({ transactions }) {
  if (transactions.length === 0) {
    return <p className="no-transactions">No transactions yet. Add some money!</p>;
  }

  return (
    <div className="transaction-list-container">
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            <span>Deposited <strong>{formatCurrency(tx.amount)}</strong></span> {/* <-- Use it here */}
            <span className="transaction-date">{tx.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;