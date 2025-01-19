import React, { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import DashboardLayout from "../../componet/DashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addcash.css";
import BASE_URL from "../../API";

function Addcash() {
const [cashAmount, setMomoAmount] = useState(0);
const [newAmount, setNewAmount] = useState("");
const fetchCash = async () => {
  try {
    const token = localStorage.getItem("logedIn");
    const response = await fetch(`${BASE_URL}/cash/read`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("Momo response:", data);

    if (data.status === "success") {
      setMomoAmount(data.data.momo.amount);
    }
  } catch (error) {
    console.error("Momo fetch error:", error);
  }
};
const handleUpdateCash = async () => {
  try {
    const amount = parseFloat(newAmount);

    // Validate amount
    if (isNaN(amount) || amount < 0) {
      toast.error("Please enter a valid positive number");
      return;
    }

    const token = localStorage.getItem("logedIn");
    const response = await fetch(`${BASE_URL}/cash/update`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (data.status === "success") {
      toast.success("Cash  account updated successfully");
      setMomoAmount(amount);
      fetchCash(); // Refresh the display
    } else {
      toast.error(data.data.message || "Failed to update amount");
    }
  } catch (error) {
    console.error("Update error:", error);
    toast.error("Failed to update cash account");
  }
};

useEffect(() => {
  fetchCash();

  const interval = setInterval(() => {
    fetchCash();
  }, 30000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="containerAddexpense">
      <DashboardLayout>
        <div className="addnew">
          <div className="addexpense">
            <h2>SET CASH AMOUNT</h2>
            <input
              type="text"
              placeholder={cashAmount}
              name="incomeType"
              onChange={(e) => setNewAmount(e.target.value)}
              min="0"
              step="0.01"
              value={newAmount}
            />

            <br />
            <Link to="/dashboard">
              <input
                type="submit"
                value="SAVE"
                id="expense-btn"
                onClick={handleUpdateCash}
              />
            </Link>
          </div>
        </div>
      </DashboardLayout>
      <ToastContainer />
    </div>
  );
}

export default Addcash;
