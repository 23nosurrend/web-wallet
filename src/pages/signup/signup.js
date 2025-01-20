import React, { useState } from "react";
import "./signup.css";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import BASE_URL from "../../API";



function Signup() {
  const name = "SIGN UP";
  const navigate = useNavigate();

  const [data, setData] = useState({
   
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

        `${BASE_URL}/admin/signup`,

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
      alert(rep.data.message)
      // console.log(rep.message); // Handle the response as per your application's requirements
      // toast.success(rep.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 1000,
      //   theme: "colored",
      // });

      if (rep.status==="success") {
        navigate("/signin");
      }
    
      // });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.Username.trim() === "") {
      alert("fil information ")
      // return toast.error("please fill all information", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      //   autoClose: false,
      //   theme: "colored",
      // });
    } else if (data.Email.trim() === "") {
      alert('Fill all information')
      // return toast.error("please fill all information", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      //   autoClose: false,
      //   theme: "colored",
      // });
    } else if (data.Password.trim() === "") {
      alert("fil information ")
      // return toast.error("please fill all information", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      //   autoClose: false,
      //   theme: "colored",
      // });
    }
    setData({
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
          <Link to="/signin" className="custom-link">Sign In</Link>

           
          </div>
        </div>
        <div className="signup-container-two">
          <div className="signup-content-two">
            <h1>CREATE ACCOUNT</h1>
            <form method="post">
              <div className="signup-name">
               
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
