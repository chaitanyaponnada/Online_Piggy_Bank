import React from 'react';
import { formatCurrency } from '../../utils/currencyFormatter';
import './ConfirmBreakModal.css';

function ConfirmBreakModal({ onConfirm, onClose, balance }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {/* --- ADD THIS IMAGE TAG --- */}
        <img
          src="https://i.postimg.cc/PxSpf1C3/break.png"
          alt="Breaking Piggy Bank"
          className="modal-image"
        />

        <h2>Break Piggy Bank?</h2>
        <p>
          This will permanently break the piggy bank. You will withdraw a total of <strong>{formatCurrency(balance)}</strong>.
        </p>
        <p className="confirm-text">Are you sure you want to proceed?</p>
        <div className="modal-actions">
          <button className="secondary-btn" onClick={onClose}>Cancel</button>
          <button className="danger-btn" onClick={onConfirm}>Confirm Break</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBreakModal;