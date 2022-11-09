import React from "react";
import './style.css';
import {Route, Link, Routes, useLocation} from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  console.log(location)
  let key = "";
  if(location.pathname == "/courses"){
    key = "courses"
  }
  else if(location.pathname == "/education"){
    key = 'education'
  }
  else{
    key = "home"
  }
  console.log(key);
  if (key == "home"){
    return (
      <div className="topnav">
        <a className="active" href="/home">Home</a>
        <a href="/education">Education</a>
        <a href="/courses">Courses Taught</a>
    </div>
  );
  }
  else if (key == "education"){
    return (
      <div className="topnav">
        <a href="/home">Home</a>
        <a className="active" href="/education">Education</a>
        <a href="/courses">Courses Taught</a>
    </div>
  );
  }
  else{
    return (
      <div className="topnav">
        <a href="/home">Home</a>
        <a href="/education">Education</a>
        <a className="active" href="/courses">Courses Taught</a>
    </div>
  );
  }
  }

  export default Navbar;