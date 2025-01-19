import React, { useState,useEffect } from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import "./balance.css";
import BASE_URL from "../../API";

function Balance() {
  const [show, setShow] = useState(true);
  const toggleHiddenSection = () => {
    setShow(!show);
  };

const [budgetAmount, setBudgetAmount] = useState(0);
const [newBudget, setNewBudget] = useState('');
  const fetchBudget = async () => {
    try {
      const token = localStorage.getItem('logedIn');
      const response = await fetch(`${BASE_URL}/budget/read`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      console.log('budget response:', data);
      
      if (data.status === "success") {
        setBudgetAmount(data.data.momo.amount);
      }
    } catch (error) {
      console.error('Budget fetch error:', error);
    }
  };
  const handleUpdateBudget = async () => {
        try {
            const amount = parseFloat(newBudget);
            
            // Validate amount
            if (isNaN(amount) || amount < 0) {
                toast.error('Please enter a valid positive number');
                return;
            }

            const token = localStorage.getItem('logedIn');
            const response = await fetch(`${BASE_URL}/budget/update`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount })
            });

            const data = await response.json();

            if (data.status === "success") {
                toast.success('Budget account updated successfully');
                setBudgetAmount(amount);
                fetchBudget(); 
            } else {
                toast.error(data.data.message || 'Failed to update amount');
            }
        } catch (error) {
            console.error('Update error:', error);
            toast.error('Failed to update Budget account');
        }
    };

  useEffect(() => {
    
     
      fetchBudget();

  
      
      const interval = setInterval(() => {
      
        fetchBudget();
      
      }, 30000);
  
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="containerBalanceSec">
      <DashboardLayout>
        <div className="balance-page">
          <div className="balance-description">
            <p className="balance-intro">
              Please be informed that your Budget is default set to zero. To
              kickstart your transaction records , simply spcify your budget and start rexording journey
            </p>
          </div>
          <div className="balance-amount">
            <p className="balance-par">
              Amount: <span id="totalbalance">{budgetAmount}</span>
            </p>
          </div>
          <div className="balance-btn">
            {" "}
            <button onClick={toggleHiddenSection}>Set Your Budget</button>
            <br />
          </div>
          {!show && (
            <div className="balance-show">
              <div className="balance-form-btn">
                <form>
                  <input
                    type="number"
                    placeholder={budgetAmount}
                    name="amount"
                    onChange={(e) => setNewBudget(e.target.value)}
                            min="0"
                            step="0.01"
              value={newBudget}
                  />
                  <br />
                  <input
                    type="submit"
                    value="SET"
                    id="balance-btn"
                    onClick={handleUpdateBudget}
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
      <ToastContainer />
    </div>
  );
}

export default Balance;
