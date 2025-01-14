import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/home/home'
// import Signup from "../../pages/signup/signup";
// import Signin from "../../pages/signup/signin";
// import Dashboard from "../../pages/dashboard/index";
// import Dashboardhome from "../../pages/dashboard/index";
// import RecordIncome from "../../pages/session-record/getincome";
// import Joining from "../joining";
// import Cooperative from "../cooperative";
// import Dashboard2 from "../dashboard2";
// import Viewgoal from "../../pages/GoalSection/viewgoal";
// import Setgoal from "../../pages/GoalSection/setgoal";
// import Addexpense from "../../pages/addexpenses/Addexpense";
// import Addincome from "../../pages/income/addincome";
// import Balance from "../../pages/myAccount/balance";
// import Expenses from "../../pages/expense/Expenses";
// import CurrentBalance from "../../pages/currentBalance/currentbal";
// import Recordgoal from "../../pages/session-record/recordgoal";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/Dash2" element={<Dashboard2 />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/joining.js" element={<Joining />} />
      <Route path="/Cooperative.js" element={<Cooperative />} />
      <Route path="/signup.js" element={<Signup />} />
      <Route path="/signin.js" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recording" element={<RecordIncome />} />
      <Route path="/dashhome" element={<Dashboardhome />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/goals" element={<Recordgoal />} />
      <Route path="/addexpense" element={<Addexpense />} />
      <Route path="/currentbalance" element={<CurrentBalance />} />
      <Route path="/addincome" element={<Addincome />} />
      <Route path="/viewgoal" element={<Viewgoal />} />
      <Route path="/setgoal" element={<Setgoal />} /> */}
    </Routes>
  );
};
export default Index;
