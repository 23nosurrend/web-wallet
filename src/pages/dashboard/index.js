import React,{useState,useEffect} from "react";
import "../dashboard/dashboard.css";
import { Link } from "react-router-dom";
import BASE_URL from "../../API";


import { BsEmojiLaughing } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import DashboardLayout from "../../componet/DashboardLayout";
const Index = () => {

  const [cashAmount, setCashAmount] = useState(0);
  const [momoAmount, setMomoAmount] = useState(0);
  const [budgetAmount, setBudgetAmount] = useState(0);

  const fetchCash = async () => {
    try {
      const token = localStorage.getItem('logedIn');
      const response = await fetch(`${BASE_URL}/cash/read`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      console.log('Cash response:', data);
      
      if (data.status === "success") {
        setCashAmount(data.data.cash.amount);
      }
    } catch (error) {
      console.error('Cash fetch error:', error);
    }
  };

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
      console.log('Budget response:', data);
      
      if (data.status === "success") {
        setBudgetAmount(data.data.budget.amount);
      }
    } catch (error) {
      console.error('Budget fetch error:', error);
    }
  };

  useEffect(() => {
  
    fetchCash();
    fetchMomo();
    fetchBudget();

 
    const interval = setInterval(() => {
      fetchCash();
      fetchMomo();
      fetchBudget();
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  return (
    <DashboardLayout>
      <div className="dash-container">
        <div className="parent">
          <h1>Welcome to Web Wallet Dashboard</h1>
          <div className="date">
            <input type="search" placeholder="search..."></input>
          </div>
          <div className="parent1">
            <div className="par-child5">
              <div className="team">
                <div className="updates">
                  <h2>WORK AS TEAM</h2>

                  <div className="message">
                    <p>
                      {" "}
                      Start recording your transaction. Our platform offers seamless
                      collaboration featu- res for transaction record keeping.
                    </p>

                    <p>What are you waiting of join our team now!</p>

                    <Link>
                      <button className="join-btn">
                        Join team <AiOutlineArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="par-child2">
              <div className="ch1">
                <div className="income">
                  <div className="middle">
                    <div className="left">
                      <h3>Cash account</h3>
                      <h2>{cashAmount} Rwf</h2>
                    </div>

                    <div className="numbers">
                      <p>0%</p>
                    </div>
                    <h5>Update Account as you like</h5>
                  </div>
                </div>
              </div>
              <div className="ch2">
                <div className="income">
                  <div className="middle">
                    <div className="left">
                      <h3>Mobile Account </h3>
                      <h2>{ momoAmount} Rwf</h2>
                    </div>

                    <div className="numbers">
                      <p>0%</p>
                    </div>
                    <h5>Update Account as you like</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="par-child3">
              <div className="balance">
                <div className="updates">
                  <h2>Budget</h2>

                  <h3>{budgetAmount} Rwf</h3>

                  <div className="message">
                    <span>
                      <b>
                        Respect your budget <BsEmojiLaughing />
                      </b>
                    </span>

                    <p>
                      To achive your goal you should spend strickly based on your budget{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parent2">
            <div className="par-child4">
              {/* <h2>Activities of Year</h2> */}
              <div className="recent-month">
                <table>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Total Savings ($)</th>
                      <th>Income($)</th>
                      <th>Expenses($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Junary</td>
                      <td>1500</td>
                      <td>3000</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>2500</td>
                      <td>4000</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>3000</td>
                      <td>3500</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>April</td>
                      <td>1500</td>
                      <td>3000</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>May</td>
                      <td>4500</td>
                      <td>3500</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>June</td>
                      <td>1500</td>
                      <td>3000</td>
                      <td>1500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="par-child1">
              <div className="insight">
                <div className="middles">
                  <h3>Savings</h3>
                  <h2>0</h2>
                  <h5>Your saving journery is not bad!</h5>
                  <div className="progress">
                    <svg>
                      <circle cx={38} cy={36} r={36}></circle>
                    </svg>

                    <div className="number">
                      <p>0%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Index;
