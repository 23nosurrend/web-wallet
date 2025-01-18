import React, { useState } from "react";
import Goalnav from "./goalNav";
import DashboardLayout from "../../componet/DashboardLayout";
import { BsSearch } from "react-icons/bs";
import BASE_URL from "../../API";

function Viewgoal() {
  const [viewgoals, setViewgoals] = useState([]);


  fetch(`${BASE_URL}/api/v1/readgoal`)

    .then((res) => res.json())
    .then((data) => {
      setViewgoals(data.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="containerViewgoal">
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
                <table cellSpacing={1} border={0}>
                  <tr>
                    <th>Title</th>
                    <th>Starting Time</th>
                    <th>Ending Time</th>
                    <th>Amount Required</th>
                    <th>Goal Details</th>
                    {/* <th>Email</th> */}
                  </tr>
                  {viewgoals &&
                    viewgoals.map((row) => (
                      <tr>
                        <td>{row.Title}</td>
                        <td>{row.startTime}</td>
                        <td>{row.endTime}</td>
                        <td>{row.amount}</td>
                        <td>{row.detailsGoals}</td>
                        {/* <td>{row.Email}</td> */}
                      </tr>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Viewgoal;
