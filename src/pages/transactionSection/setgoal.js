import React, { useState } from "react";
import Goalnav from "./goalNav";
import "./goal.css";
import DashboardLayout from "../../componet/DashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../API";

function Setgoal() {
  const [selectedWallet, setSelectedWallet] = useState(''); 
  const handleWalletChange = (e) => {
  setSelectedWallet(e.target.value);
};
   const [data, setData] = useState({
    walletType: "",
    amount: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const token = localStorage.getItem('logedIn');
       if (!selectedWallet || !data.amount) {
      toast.error("Please select wallet type and enter amount");
      return;
    }
      const response = await fetch(

        `${BASE_URL}/transaction/create`,

        {
          method: "POST",
          headers: {
             'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            walletType:selectedWallet,
            amount: Number(data.amount)
          }),
        }
      )
       const rep = await response.json();
      if (response.ok) {
      if (rep.status === "success") {
        toast.success(rep.data.message);
        setData({
          walletType: "",
          amount: ""
        });
        setSelectedWallet("");
      }
    } else {
    
      toast.error(rep.data.message || "Transaction failed");
    }
    } catch (error) {
      console.log(error);
    }
  };


  const handleSetgoal = (e) => {
    e.preventDefault();

    if (!selectedWallet) {
    toast.error("Please select a wallet type");
    return;
  }

  if (!data.amount || data.amount <= 0) {
    toast.error("Please enter a valid amount");
    return;
  }
    post();
    console.log(data);
  
  };
  return (
    <div className="containerGoals" >
      <DashboardLayout>
        <Goalnav />
        <div className="formAll">
          <div style={{ margin: '10px 0' }}>
 
</div>
          <div className="goal-setgoal">
            <h1 className="setgoal-header">
              Record your transaction. Achieve Your Dreams. Complete the fields below to
              get started on your path to success.
            </h1>

            <div className="form-setgoal">
               <label>Select Wallet Type: </label>
  <select 
    value={selectedWallet} 
    onChange={handleWalletChange}
    style={{ 
      padding: '8px', 
      width: '200px',
      marginLeft: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom:"10px"
    }}
  >
    <option value="">Choose wallet type</option>
    <option value="cash">Cash Wallet</option>
    <option value="momo">Mobile Money</option>
    {/* <option value="BANK">Bank Account</option>
    <option value="CREDIT_CARD">Credit Card</option>
    <option value="SAVINGS">Savings Account</option> */}
              </select>
              <br/>
              <input
                type="number"
                placeholder="Write to spend in number "
                name="amount"
                onChange={handleChange}
                value={data.amount}
              />
              <br />
              <textarea
                placeholder="Details Goals"
                rows="7"
                name="Write the reason of spending fro better transaction record keeping"
                onChange={handleChange}
                value={data.transactiondetails}
              ></textarea>
              {/* <Button btnName="SAVE" onClick={handleSetgoal}></Button> */}
              <input
                type="submit"
                value="SAVE"
                id="goal-btn"
                onClick={handleSetgoal}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
      <ToastContainer />
    </div>
  );
}

export default Setgoal;
