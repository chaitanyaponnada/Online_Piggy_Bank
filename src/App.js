import React from 'react';
import PiggyBankView from './components/PiggyBankView/PiggyBankView';
import BrokenView from './components/BrokenView/BrokenView';
import AddMoneyModal from './components/AddMoneyModal/AddMoneyModal';
import ConfirmBreakModal from './components/ConfirmBreakModal/ConfirmBreakModal'; // <-- 1. Import new modal
import './App.css';

class App extends React.Component {
   state = {
    isBroken: true, // Start in the 'broken' state
    balance: 0,
    transactions: [],
    isAddMoneyModalOpen: false,
    isConfirmModalOpen: false,
  };

  // --- Modal Handlers ---
  handleOpenAddMoneyModal = () => this.setState({ isAddMoneyModalOpen: true });
  handleCloseAddMoneyModal = () => this.setState({ isAddMoneyModalOpen: false });
  handleOpenConfirmModal = () => this.setState({ isConfirmModalOpen: true });
  handleCloseConfirmModal = () => this.setState({ isConfirmModalOpen: false });

  // --- Piggy Bank Handlers ---
  handleAddMoney = (amount) => {
    // ... (this function remains the same)
    const newTransaction = {
      id: Date.now(),
      amount: amount,
      date: new Date().toISOString().slice(0, 10),
    };
    this.setState(prevState => ({
      balance: prevState.balance + amount,
      transactions: [newTransaction, ...prevState.transactions],
    }));
    this.handleCloseAddMoneyModal();
  };

  // 3. handleBreak now just opens the confirmation modal
  handleBreak = () => {
    this.handleOpenConfirmModal();
  };
  
  // 4. New function to handle the actual breaking logic
  handleConfirmBreak = () => {
    this.setState({ isBroken: true, isConfirmModalOpen: false });
  };

  handleCreateNew = () => {
    // ... (this function remains the same)
    this.setState({
      isBroken: false,
      balance: 0,
      transactions: [],
    });
  };

  render() {
    const { isBroken, balance, transactions, isAddMoneyModalOpen, isConfirmModalOpen } = this.state;

    // 5. Blur the background if ANY modal is open
    const isAnyModalOpen = isAddMoneyModalOpen || isConfirmModalOpen;

    return (
      <>
        <div className={`app-container ${isAnyModalOpen ? 'content-blurred' : ''}`}>
          <header>
            <h1>Online Piggy Bank</h1>
          </header>
          <main>
            {isBroken ? (
              <BrokenView 
                finalBalance={balance} 
                onStartNew={this.handleCreateNew} 
              />
            ) : (
              <PiggyBankView
                balance={balance}
                transactions={transactions}
                onAddMoneyClick={this.handleOpenAddMoneyModal}
                onBreak={this.handleBreak} // This now opens the confirm modal
              />
            )}
          </main>
        </div>

        {/* Add Money Modal */}
        {isAddMoneyModalOpen && (
          <AddMoneyModal 
            onSubmit={this.handleAddMoney} 
            onClose={this.handleCloseAddMoneyModal} 
          />
        )}

        {/* 6. Conditionally render the new Confirm Break Modal */}
        {isConfirmModalOpen && (
          <ConfirmBreakModal
            balance={balance}
            onConfirm={this.handleConfirmBreak}
            onClose={this.handleCloseConfirmModal}
          />
        )}
      </>
    );
  }
}

export default App;