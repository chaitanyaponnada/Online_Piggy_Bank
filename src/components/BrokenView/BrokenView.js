import React from 'react';
import { formatCurrency } from '../../utils/currencyFormatter';
import './BrokenView.css';

function BrokenView({ finalBalance, onStartNew }) {
  return (
    <div className="broken-view">
      {finalBalance > 0 ? (
        // This view is shown after breaking a piggy bank with money
        <>
          <h2>Congratulations! 🥳</h2>
          <p>You've broken your piggy bank and collected <strong>{formatCurrency(finalBalance)}</strong></p>
          <p>Ready to start saving again?</p>
        </>
      ) : (
        // This view is shown on the initial load
        <>
          <h2>Welcome to Your Piggy Bank!</h2>
          <p>Create one now to start saving for your goals.</p>
        </>
      )}
      <button className="primary-btn" onClick={onStartNew}>
        Create a New Piggy Bank
      </button>
    </div>
  );
}

export default BrokenView;