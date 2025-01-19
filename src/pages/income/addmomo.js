import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addmomo.css";
import DashboardLayout from "../../componet/DashboardLayout";
import BASE_URL from "../../API";

const Addmomo = () => {
  const [momoAmount, setMomoAmount] = useState(0);
      const [newAmount, setNewAmount] = useState('');
  const fetchMomo = async () => {
    try {
      const token = localStorage.getItem('logedIn');
      const response = await fetch(`${BASE_URL}/momo/read`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      console.log('Momo response:', data);
      
      if (data.status === "success") {
        setMomoAmount(data.data.momo.amount);
      }
    } catch (error) {
      console.error('Momo fetch error:', error);
    }
  };
  const handleUpdateMomo = async () => {
        try {
            const amount = parseFloat(newAmount);
            
            // Validate amount
            if (isNaN(amount) || amount < 0) {
                toast.error('Please enter a valid positive number');
                return;
            }

            const token = localStorage.getItem('logedIn');
            const response = await fetch(`${BASE_URL}/momo/update`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount })
            });

            const data = await response.json();

            if (data.status === "success") {
                toast.success('Mobile money account updated successfully');
                setMomoAmount(amount);
                fetchMomo(); // Refresh the display
            } else {
                toast.error(data.data.message || 'Failed to update amount');
            }
        } catch (error) {
            console.error('Update error:', error);
            toast.error('Failed to update mobile money account');
        }
    };

  useEffect(() => {
    
     
      fetchMomo();

  
      
      const interval = setInterval(() => {
      
        fetchMomo();
      
      }, 30000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <div className="income-container">
        <DashboardLayout>
          <div className="income-content">
            <h2>SET MOBILE AMOUNT</h2>
            <input
              type="text"
              placeholder={momoAmount}
              name="incomeType"
             onChange={(e) => setNewAmount(e.target.value)}
                            min="0"
                            step="0.01"
              value={newAmount}
            />{" "}
            
           
            <br />
            <input
              type="submit"
              value="SAVE"
              id="income-btn"
              onClick={handleUpdateMomo}
            />
          </div>
        </DashboardLayout>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Addmomo;
