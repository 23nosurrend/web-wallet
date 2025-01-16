import React, { useState } from "react";
import "./signup.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import BASE_URL from "../../API";

function Signup() {
  const name = "SIGN UP";
  const navigate = useNavigate();

  const [data, setData] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const response = await fetch(

        `${BASE_URL}/api/v1/user/signup`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // .then((response) => response.json())
      // .then((rep) => {
      const rep = await response.json();
      console.log(rep.message); // Handle the response as per your application's requirements
      toast.success(rep.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        theme: "colored",
      });
      if (response.ok) {
        navigate("/signin.js");
      }
      navigate("/signup.js");
      // });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.Firstname.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Lastname.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Username.trim() === "") {
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
    } else if (data.Password.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }
    setData({
      Firstname: "",
      Lastname: "",
      Username: "",
      Email: "",
      Password: "",
    });
    post(data);
    console.log(data);
  };
  return (
    <div>
      <div className="signup-container">
        <div className="signup-container-one">
          <div className="signup-content-one">
            <h1>Welcome to our site!</h1>
            <p>
              Please enter your Registration details, and start journey with us.
            </p>
            <a href="./signin.js">SIGN IN</a>
          </div>
        </div>
        <div className="signup-container-two">
          <div className="signup-content-two">
            <h1>CREATE ACCOUNT</h1>
            <form method="post">
              <div className="signup-name">
                <input
                  type="text"
                  placeholder="First Name"
                  name="Firstname"
                  onChange={handleChange}
                  value={data.Firstname}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="Lastname"
                  onChange={handleChange}
                  value={data.Lastname}
                />
                <br />
              </div>
              <input
                type="text"
                placeholder="UserName"
                name="Username"
                onChange={handleChange}
                value={data.Username}
              />
              <br />
              <input
                type="email"
                placeholder="Email "
                name="Email"
                onChange={handleChange}
                value={data.Email}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                onChange={handleChange}
                value={data.Password}
              />
              <br />
              <br />

              <Link to="/dashboard">
                {" "}
                <input
                  type="submit"
                  value={name}
                  id="signup-btn"
                  onClick={handleSubmit}
                />
              </Link>

              <ToastContainer
                transition={Flip}
                hideProgressBar={true}
                closeButton={<p>Close</p>}
              >
                {" "}
              </ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
