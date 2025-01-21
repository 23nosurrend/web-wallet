import React, { useState } from "react";
import "./signup.css";
import { ToastContainer,toast, Flip } from "react-toastify";
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
  const [loading,setLoading]=useState(false)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      setLoading(true)
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
    
      const rep = await response.json();
      setLoading(false)
      
      

      if (response.ok) {
        toast.success(rep.data.message)
        setTimeout(() => {
           navigate("/signin");
        },3000)
       
      } else {
        toast.error(rep.data.message)
        navigate("/signup")
      }
    
      
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.Username.trim() === "") {
      toast.info("fil information ")
      
    } else if (data.Email.trim() === "") {
      toast.info('Fill all information')
    
    } else if (data.Password.trim() === "") {
      toast.info("fil information ")
     
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

             
              
                <input
                  type="submit"
                  value={name}
                  id="signup-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                />
         
              {loading && <div className="loader">Loading...</div>}

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
