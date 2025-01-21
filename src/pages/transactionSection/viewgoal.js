import React from "react";
import Goalnav from "./goalNav";
import DashboardLayout from "../../componet/DashboardLayout";
import { BsSearch } from "react-icons/bs";

import TransactionList from "./transactionlist";

function Viewgoal() {
  const token = localStorage.getItem('logedIn');
  

  return (
    <div className="containerViewgoal" style={{backgroundColor:'red'}}>
      <DashboardLayout>
        <div>
          <Goalnav />
          <div className="viewgoalAll">
            <div className="viewgoal-page">
              <div className="viewgoal-search">
                <input type="search" placeholder="...." />
                <BsSearch />
              </div>
              <div className="viewgoal-table">
                      <TransactionList token={token}></TransactionList>
               
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Viewgoal;
