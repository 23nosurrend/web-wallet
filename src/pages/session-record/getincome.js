import React, { useState } from "react";
import "./getincome.css";
import { Link } from "react-router-dom";
import DashboardLayout from "../../componet/DashboardLayout";
import BASE_URL from "../../API";
function Getincome() {
  const [incomes, setIncomes] = useState([]);


  fetch(`${BASE_URL}/api/v1/get`)

    .then((res) => res.json())
    .then((data) => {
      setIncomes(data.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="recordIncomeCont">
      <DashboardLayout>
        <div className="divAll">
          <div>
            <div className="second">
              <ul>
                <li className="bold">Income</li>
                <Link to="/expenses">
                  <li>Expenses</li>
                </Link>
                <Link to="/goals">
                  <li>Goals</li>
                </Link>
              </ul>
            </div>
            <br />
            <div className="al">
              <h3>Income Contributions</h3>
              <p>
                Visualize the proportionate distribution of your income sources
                with a pie chart, allowing you to quickly understand how your
                earnings are divided among different sources.
              </p>
              <div className="getincomeTable">
                <table>
                  <thead>
                    <tr>
                      <th>SOURCE</th>
                      <th>AMOUNT</th>
                      <th>PERIOD</th>
                      {/* <th>EMAIL</th> */}
                    </tr>
                  </thead>
                  {incomes &&
                    incomes.map((detail) => (
                      <tr key={detail._id}>
                        <td>{detail.incomeType}</td>
                        <td>{detail.incomeAmount}</td>
                        <td>{detail.Period}</td>
                        {/* <td>{detail.email}</td> */}
                      </tr>
                    ))}
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
export default Getincome;
