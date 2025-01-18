import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addmomo.css";
import DashboardLayout from "../../componet/DashboardLayout";
import BASE_URL from "../../API";

const Addmomo = () => {
  const [data, setData] = useState({
    email: "",
    incomeAmount: "",
    Period: "",
    incomeType: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const response = await fetch(

        `${BASE_URL}/api/v1/createincome`,

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

  const handleAddincome = (e) => {
    e.preventDefault();

    if (data.email.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.incomeAmount.trim() === "") {
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
    } else if (data.incomeType.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }
    setData({
      email: "",
      incomeAmount: "",
      Period: "",
      incomeType: "",
    });
    post(data);
    console.log(data);
  };

  return (
    <div>
      <div className="income-container">
        <DashboardLayout>
          <div className="income-content">
            <h2>SET MOBILE AMOUNT</h2>
            <input
              type="text"
              placeholder="Income type"
              name="incomeType"
              onChange={handleChange}
              value={data.incomeType}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Income amount"
              name="incomeAmount"
              onChange={handleChange}
              value={data.incomeAmount}
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
            <input
              type="submit"
              value="SAVE"
              id="income-btn"
              onClick={handleAddincome}
            />
          </div>
        </DashboardLayout>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Addmomo;
