import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./signin.css";
// import '../dashboard/index.js'
import BASE_URL from "../../API";

const Signin = () => {
  const name = "SIGN IN";
  const navigate = useNavigate();

  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
        setLoading(true);
      const response = await fetch(

        `${BASE_URL}/admin/login`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      
      const rep = await response.json();
      console.log(rep.data.message);
     
    
      console.log("response is", response);

      if (response.ok) {
        toast.success(rep.data.message)
        localStorage.setItem("logedIn", rep.data.token);
        setTimeout(()=>{
          navigate("/dashboard");
        },2000)
        
      } else {
        toast.error(rep.data.message)
         navigate("/signin");
      }
      // alert(rep.message);
      return response;
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); 
    }
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    if (data.Email.trim() === "") {
      toast.error("Please fill all information")
    
    } else if (data.Password.trim() === "") {
      toast.error("Please fill all information")
     
    }
    setData({
      Email: "",
      Password: "",
    });
    post(data);
    console.log(data);

  };
  return (
    <div>
      <div className="Signin-container">
        <div className="Signin-container-two">
          <div className="Signin-content-two">
            <h1>SIGN IN</h1>
            <input
              type="email"
              placeholder="Email "
              name="Email"
              value={data.Email}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={data.Password}
              onChange={handleChange}
            />
            <br />
            <div className="check-container">
              
              <div className="forget">
                <a href="g">Forgot Password?</a>
              </div>
            </div>
            <input
              type="submit"
              value={name}
              id="Signin-btn"
              onClick={handleSubmits}
              disabled={loading}
            />
            {loading && <div className="loader">Loading...</div>}
          </div>
        </div>
        <div className="Signin-container-one">
          <div className="Signin-content-one">
            <h1>Welcome back!</h1>
            <p>
              To keep connected with us please Sign in with your personal info.
            </p>
              <Link to="/signup" className="custom-link">SIGN UP</Link>
           
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
