import React from "react";
import "./goal.css";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Goal = () => {
  return (
    <div className="goal-container">
      <div className="goal-navbar">
        <ul className="goal-list">
          <Link to="/transaction">
            <li className="goal-link">Create Goals</li>
          </Link>
          <Link to="/viewtransaction">
            <li className="goal-link">View Goals</li>
          </Link>
          <li className="goal-link">
            <IoMdNotifications />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Goal;
