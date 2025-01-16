import React from "react";
import "./dashnav.css";
import { MdDashboard } from "react-icons/md";

import Imge from "./images/logo.png";

const Dashnav = () => {
  return (
    <div>
      <div className="dashnav-container">
        <aside>
          <div className="top">
            <div className="logo">
              <img src={Imge} alt="my logo" />
            </div>
          </div>
          <div className="sidebar">
            <a href="/Dash2">
              <span>
                <MdDashboard />
              </span>
              <h2 className="active">Dashboard</h2>
            </a>
            <a href="/">
              <h3>Home</h3>
            </a>
            <a href="joining.js">
              <h3 className="Team">Create Team</h3>
            </a>
            <a href="/cooperative.js">
              <h3 className="Teams">All Teams</h3>
            </a>
            <a href="/dashhome">
              <h3>Save Yours</h3>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default Dashnav;
