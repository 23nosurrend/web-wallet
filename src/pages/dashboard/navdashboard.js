import React, { useState } from "react";
import Imge from "./images/logo.png";
// import "../dashboard/";
import { GrClose } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
// import { VscRecordKeys } from "react-icons/vsc";

// import { AiFillSetting } from "react-icons/ai";
// import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Navdashboard() {

  const [accountlist, setAccountlist] = useState(false);
  return (
    <div>
      <div className="dashboard-cont">
        <aside>
          <div className="top">
            <div className="logo">
              <img src={Imge} alt="my logo" />
            </div>
            <div className="close">
              <span>
                {" "}
                <GrClose />
              </span>
            </div>
          </div>
          <div className="sidebar">
            <div  className="active" id="customLink-dash">
              <span className="sideIcons">
                <MdDashboard />
              </span>{" "}
              <Link to="/dashboard" >
                <h2>Dashboard</h2>
              </Link>
            </div>
            <a href="# " className="sub-titlenav"
             onClick={(e) => {
    e.preventDefault();
   
  }}
            >
              <span className="sideIcons">
                {" "}
                <AiFillHome />
              </span>
              <Link to="/" >
                <h3>Home</h3>
              </Link>
            </a>
            <a href="# " className="sub-titlenav"
              onClick={(e) => {
    e.preventDefault();
    setAccountlist(!accountlist);
  }}
            
            
            >
              <span className="sideIcons">
                <MdAccountBox />
              </span>
              <h3 className="accountsection">My Account</h3>
              <div className="myaccount-sectionone">
                {!accountlist && (
                  <IoIosArrowDown onClick={() => setAccountlist(true)} />
                )}
                {accountlist && (
                  <IoIosArrowDown onClick={() => setAccountlist(false)} />
                )}
              </div>
              {accountlist && (
                <div className="myaccount-nav">
                  <ul className="myaccount-nav-list">
                    <li className="myaccount-nav-link">
                      <Link to="/addmomo"> Mobile Account</Link>
                    </li>
                    <li className="myaccount-nav-link">
                      <Link to="/addcash"> Cash Account</Link>
                    </li>

                    <li className="myaccount-nav-link">
                      <Link to="/budget">Budget</Link>
                    </li>
                    <li className="myaccount-nav-link"></li>
                  </ul>
                </div>
              )}
            </a>
            <a href="# " className="sub-titlenav"
             onClick={(e) => {
    e.preventDefault();
    
  }}
            >
              <span className="sideIcons">
                <GiStairsGoal />
              </span>
              <Link to="/transaction">
                <h3 className="goalSection">Transaction</h3>
              </Link>
            </a>
            
            {/* <div className="sub-titlenav">
              <span className="sideIcons">
                <AiFillSetting />
              </span>
              <h3>Settings</h3>
            </div> */}

            <a href="# " className="logout"
             onClick={(e) => {
    e.preventDefault();
    
  }}
            >
              {/* <div className="sub-titlenav">
                <span className="sideIcons">
                  <TbLogout />
                </span>
                <h3>Logout</h3>
              </div> */}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Navdashboard;
