import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/home/home'
import Signup from '../../pages/signup/signup';
import Signin from "../../pages/signup/signin";
import Dashboard from "../../pages/dashboard/index";
import Addcash from "../../pages/addcash/Addcash";
import Addmomo from "../../pages/income/addmomo";
// import Addbudget from "../../pages/addbudget/Addbudget"
import Budget from "../../pages/myAccount/balance";
import Transaction from "../../pages/transactionSection/setgoal"
// import ViewTransaction from "../../pages/session-record/recordgoal"
import TransactionHistory from "../../pages/transactionSection/viewgoal"


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addcash" element={<Addcash />} />
      {/* <Route path="/currentbalance" element={<CurrentBalance />} /> */}
      <Route path="/addmomo" element={<Addmomo />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/viewtransaction" element={<TransactionHistory />} />
     
    </Routes>
  );
};
export default Index;
