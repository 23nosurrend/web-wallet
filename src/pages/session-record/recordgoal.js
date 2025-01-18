import React, { useState } from "react";
import DashboardLayout from "../../componet/DashboardLayout";
import { BsSearch } from "react-icons/bs";
import "./recordgoals.css";
import { Link } from "react-router-dom";
import BASE_URL from "../../API";

function RecordGoal() {
  const [recordgoals, setRecordgoals] = useState([]);


  fetch(`${BASE_URL}/api/v1/readgoal`)

    .then((res) => res.json())
    .then((data) => {
      setRecordgoals(data.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="record-containerViewgoal">
      <DashboardLayout>
        <div className="second">
          <ul>
            <Link to="/recording">
              <li className="bold">Income</li>
            </Link>
            <Link to="/expenses">
              <li>Expenses</li>
            </Link>
            <Link to="/goals">
              <li className="bolds">Goals</li>
            </Link>
          </ul>
        </div>
        <div className="record-viewgoalAll">
          <div className="record-viewgoal-page">
            <div className="record-viewgoal-search">
              <input type="search" placeholder="...." />
              <BsSearch />
            </div>
            <div className="record-viewgoal-table">
              <table cellSpacing={1} border={0}>
                <tr>
                  <th>Title</th>
                  <th>Starting Time</th>
                  <th>Ending Time</th>
                  <th>Amount Required</th>
                  <th>Goal Details</th>
                  {/* <th>Email</th> */}
                </tr>
                {recordgoals &&
                  recordgoals.map((rows) => (
                    <tr>
                      <td>{rows.Title}</td>
                      <td>{rows.startTime}</td>
                      <td>{rows.endTime}</td>
                      <td>{rows.amount}</td>
                      <td>{rows.detailsGoals}</td>
                      {/* <td>{rows.Email}</td> */}
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default RecordGoal;
