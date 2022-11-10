import React from "react";
import IntroCard from '../components/introCard';
import Education from "../components/education"
import Courses from "../components/courses"
  
const Home = () => {
  return (
    <div>
      <IntroCard/>
      <Education/>
      <Courses/>
    </div>
    );
};
  
export default Home;