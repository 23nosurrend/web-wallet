import React, { useState } from "react";

import { Link } from "react-router-dom";
import DashboardLayout from "../../componet/DashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addbudget.css";
import BASE_URL from "../../API";

function Addbudget() {
  const [data, setData] = useState({
    email: "",
    amountSpent: "",
    Period: "",
    expenseType: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/create`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((rep) => {
          console.log(rep.message); // Handle the response as per your application's requirements
          toast.success(rep.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            theme: "colored",
          });
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddexpense = (e) => {
    e.preventDefault();

    if (data.expenseType.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.amountSpent.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Period.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.email.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }
    setData({
      email: "",
      amountSpent: "",
      Period: "",
      expenseType: "",
    });
    post(data);
    console.log(data);
  };

  return (
    <div className="containerAddexpense">
      <DashboardLayout>
        <div className="addnew">
          <div className="addexpense">
            <h2>SET CASH AMOUNT</h2>
            <input
              type="text"
              placeholder="Expense type"
              name="expenseType"
              onChange={handleChange}
              value={data.expenseType}
            />
            <br />
            <input
              type="text"
              placeholder="Amount spent"
              name="amountSpent"
              onChange={handleChange}
              value={data.amountSpent}
            />
            <br />
            <input
              type="text"
              placeholder="Period"
              name="Period"
              onChange={handleChange}
              value={data.Period}
            />
            <br />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
            <br />
            <br />
            <Link to="/expenses">
              <input
                type="submit"
                value="SAVE"
                id="expense-btn"
                onClick={handleAddexpense}
              />
            </Link>
          </div>
        </div>
      </DashboardLayout>
      <ToastContainer />
    </div>
  );
}

export default Addbudget;
