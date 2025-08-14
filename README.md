# 🐷 Online Piggy Bank

An interactive **React.js** web application that lets you **save, track, and withdraw money** from a virtual piggy bank.  
Built with a focus on **simple UI, smooth user experience, and clean component-based design**.
LIVE DEMO : https://online-piggy-bank-react.vercel.app/
---

## ✨ Features

- **Add Money** 💰  
  Deposit any positive amount into your piggy bank using a modal form with validation.

- **Transaction History** 📜  
  View all deposits in a clean, chronological list with dates and formatted amounts.

- **Break Piggy Bank** 🔨  
  Withdraw **all** your savings at once.  
  Breaking the bank permanently closes it until you start a new one.

- **Start New Piggy Bank** 🆕  
  Once a bank is broken, create a fresh one and start saving again.

- **Single Active Bank Rule** 🔒  
  Only one piggy bank can exist at a time — no multiple active banks.

- **Beautiful Modals & UI** 🎨  
  Friendly visuals with piggy bank images, smooth layouts, and consistent styles.

---

## 🛠 Tech Stack

**Frontend**  
- React.js (Functional Components + Hooks)
- CSS3 (Modular Component Styles)
- JavaScript ES6+

**Utilities**  
- Custom `formatCurrency` helper for clean money formatting.

---

## 🧩 Component Structure

- **`AddMoneyModal`** → Modal for entering deposit amount.
- **`ConfirmBreakModal`** → Confirmation dialog before breaking the bank.
- **`BrokenView`** → Display after breaking bank (or before first bank creation).
- **`PiggyBankView`** → Main active bank UI with balance, actions, and transaction list.
- **`TransactionList`** → Lists all deposits with amount and date.

---

## 📂 Folder Structure

src/
├── components/
│ ├── AddMoneyModal/
│ │ ├── AddMoneyModal.jsx
│ │ └── AddMoneyModal.css
│ ├── ConfirmBreakModal/
│ │ ├── ConfirmBreakModal.jsx
│ │ └── ConfirmBreakModal.css
│ ├── BrokenView/
│ │ ├── BrokenView.jsx
│ │ └── BrokenView.css
│ ├── PiggyBankView/
│ │ ├── PiggyBankView.jsx
│ │ └── PiggyBankView.css
│ └── TransactionList/
│ ├── TransactionList.jsx
│ └── TransactionList.css
├── utils/
│ └── currencyFormatter.js
├── App.js
└── index.js

yaml
Copy code

---

## 🚀 How to Run Locally

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/online-piggy-bank.git
   cd online-piggy-bank
Install Dependencies

npm install
Run the App


npm start
Open in browser:

http://localhost:3000

🎯 How It Works
Start → If no active bank, BrokenView invites you to create one.

Deposit → Open AddMoneyModal, enter an amount, and confirm.

Track → Every deposit appears in the TransactionList.

Break Bank → Open ConfirmBreakModal, confirm to withdraw all.

Restart → Create a new piggy bank and repeat the cycle.


👨‍💻 Author
Chaitanya Ponnada
Frontend Developer passionate about clean UI, component-based architecture, and creating smooth user experiences.

LinkedIn: https://www.linkedin.com/in/chaitanya-ponnada/

📄 License
This project is for educational/demo purposes only.
