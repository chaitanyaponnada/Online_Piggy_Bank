import React from 'react';
import TransactionList from '../TransactionList/TransactionList';
// No longer need to import AddMoneyModal or useState here
import './PiggyBankView.css';
import { formatCurrency } from '../../utils/currencyFormatter'; 

// The component is now simpler
function PiggyBankView({ balance, transactions, onAddMoneyClick, onBreak }) {
  return (
    // The conditional 'blurred' class is removed from here
    <div className="piggy-bank-view">
      <div className="balance-card">
        <h2>Current Balance</h2>
<p className="balance-amount">{formatCurrency(balance)}</p>

      </div>
      <div className="action-buttons">
        {/* This button now calls the prop from App.js */}
        <button className="primary-btn" onClick={onAddMoneyClick}>+ Add Money</button>
        <button className="secondary-btn" onClick={onBreak}>🔨 Break Piggy Bank</button>
      </div>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default PiggyBankView;