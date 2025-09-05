import React, { useState } from 'react';
import './AddMoneyModal.css';

function AddMoneyModal({ onSubmit, onClose }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      onSubmit(numericAmount);
    } else {
      alert('Please enter a valid positive amount.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {/* --- ADD THIS IMAGE TAG --- */}
        <img
          src="https://i.postimg.cc/9FrTMgtG/add.png"
          alt="Add Coins"
          className="modal-image"
        />
        
        <h2>Add Money</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Amount to Deposit:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount"
            min="0.01"
            step="0.01"
            autoFocus
            required
          />
          <div className="modal-actions">
            <button type="submit" className="primary-btn">Confirm</button>
            <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMoneyModal;