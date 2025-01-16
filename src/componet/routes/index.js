import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/home/home'
import Signup from '../../pages/signup/signup';
import Signin from "../../pages/signup/signin";
import Dashboard from "../../pages/dashboard/index";


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signup.js" element={<Signup />} />
      <Route path="/signin.js" element={<Signin />} />
      
     <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default Index;
