import React from "react";
import "./App.css";
import { Header } from "./component/Header";
import { Balance } from "./component/Balance";
import { IncomeExpenses } from "./component/IncomeExpenses";
import { TransactionList } from "./component/TransactionList";
import AddTransactionList from "./component/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import firebase from "./config/firebase";

const App: React.FC = () => {
  window.addEventListener("load", () => {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        console.log("permission granted");
      })
      .catch(() => console.log("permission denied"));
  });

  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactionList />
        </div>
      </div>
    </GlobalProvider>
  )
};

export default App;
