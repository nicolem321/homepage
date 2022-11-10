import React from "react";
import './style.css';
import {useLocation} from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  let key = "";
  if(location.hash == "#courses"){
    key = "courses"
  }
  else if(location.hash == "#education"){
    key = 'education'
  }
  else{
    key = "home"
  }
  if (key == "home"){
    return (
      <div className="topnav">
        <a className="active" href="/homepage">Home</a>
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
        <a className="active" href="/homepage#courses">Courses Taught</a>
    </div>
  );
  }
  }

  export default Navbar;