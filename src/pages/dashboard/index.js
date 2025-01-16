import React from "react";
import "../dashboard/dashboard.css";
import { Link } from "react-router-dom";
// import Joining from "../../componet/joining";
// import logo1 from "../dashboard/images/logo1.png";
// import logo2 from "../dashboard/images/logo2.jpg"
// import {GrMenu} from 'react-icons/gr'

import { BsEmojiLaughing } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import DashboardLayout from "../../componet/DashboardLayout";
const Index = () => {
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
                      Start savings as a team. Our platform offers seamless
                      collaboration featu- res for collective saving.
                    </p>

                    <p>What are you waiting of join our team now!</p>

                    <Link to="/Dash2">
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
                      <h3>Income</h3>
                      <h2>0.0</h2>
                    </div>

                    <div className="numbers">
                      <p>0%</p>
                    </div>
                    <h5>Compared to($1500 last month)</h5>
                  </div>
                </div>
              </div>
              <div className="ch2">
                <div className="income">
                  <div className="middle">
                    <div className="left">
                      <h3>Expenses</h3>
                      <h2>0.0</h2>
                    </div>

                    <div className="numbers">
                      <p>0%</p>
                    </div>
                    <h5>Compared to($1500 last month)</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="par-child3">
              <div className="balance">
                <div className="updates">
                  <h2>Balance</h2>

                  <h3>0</h3>

                  <div className="message">
                    <span>
                      <b>
                        Congratulations <BsEmojiLaughing />
                      </b>
                    </span>

                    <p>
                      Accordingly to the last, you work well but try to increase
                      your saving money inorder to your complete goal!!{" "}
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
