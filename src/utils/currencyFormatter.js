/**
 * Formats a number into the Indian currency system (e.g., ₹1,50,000.00)
 * @param {number} amount The number to format
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (amount) => {
  // 'en-IN' specifies the Indian English locale for correct comma placement.
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};