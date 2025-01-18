import React, { useState } from "react";
import Goalnav from "./goalNav";
import "./goal.css";
import DashboardLayout from "../../componet/DashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../API";

function Setgoal() {
  const [data, setData] = useState({
    Title: "",
    startTime: "",
    endTime: "",
    Email: "",
    amount: "",
    detailsGoals: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const response = await fetch(

        `${BASE_URL}/api/v1/setGoal`,

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

  const handleSetgoal = (e) => {
    e.preventDefault();

    if (data.Title.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.startTime.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.endTime.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.amount.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Email.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.detailsGoals.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }
    setData({
      Title: "",
      startTime: "",
      endTime: "",
      Email: "",
      amount: "",
      detailsGoals: "",
    });
    post(data);
    console.log(data);
    console.log("hello");
  };
  return (
    <div className="containerGoals">
      <DashboardLayout>
        <Goalnav />
        <div className="formAll">
          <div className="goal-setgoal">
            <h1 className="setgoal-header">
              Set Your Goals. Achieve Your Dreams. Complete the fields below to
              get started on your path to success.
            </h1>

            <div className="form-setgoal">
              <input
                type="text"
                placeholder="Title"
                name="Title"
                onChange={handleChange}
                value={data.Title}
              />
              <br />
              <input
                type="text"
                placeholder="Starting Time"
                name="startTime"
                onChange={handleChange}
                value={data.startTime}
              />
              <br />
              <input
                type="text"
                placeholder="Ending Time"
                name="endTime"
                onChange={handleChange}
                value={data.endTime}
              />
              <br />
              <input
                type="text"
                placeholder="Amount Required"
                name="amount"
                onChange={handleChange}
                value={data.amount}
              />
              <br />
              <input
                type="email"
                placeholder="Your Email"
                name="Email"
                onChange={handleChange}
                value={data.Email}
              />
              <br />
              <textarea
                placeholder="Details Goals"
                rows="7"
                name="detailsGoals"
                onChange={handleChange}
                value={data.detailsGoals}
              ></textarea>
              {/* <Button btnName="SAVE" onClick={handleSetgoal}></Button> */}
              <input
                type="submit"
                value="SAVE"
                id="goal-btn"
                onClick={handleSetgoal}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
      <ToastContainer />
    </div>
  );
}

export default Setgoal;
