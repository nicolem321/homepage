import React from "react";
import './style.css';
import {Route, Link, Routes, useLocation} from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  console.log(location)
  let key = "";
  if(location.pathname == "/homepage#courses"){
    key = "courses"
  }
  else if(location.pathname == "/homepage#education"){
    key = 'education'
  }
  else{
    key = "home"
  }
  console.log(key);
  if (key == "home"){
    return (
      <div className="topnav">
        <a className="active" href="/homeoage">Home</a>
        <a href="/homepage#education">Education</a>
        <a href="/homepage#courses">Courses Taught</a>
    </div>
  );
  }
  else if (key == "education"){
    return (
      <div className="topnav">
        <a href="/homepage">Home</a>
        <a className="active" href="/homepage#education">Education</a>
        <a href="/homepage#courses">Courses Taught</a>
    </div>
  );
  }
  else{
    return (
      <div className="topnav">
        <a href="/homepage">Home</a>
        <a href="/homepage#education">Education</a>
        <a className="active" href="/homapage#courses">Courses Taught</a>
    </div>
  );
  }
  }

  export default Navbar;