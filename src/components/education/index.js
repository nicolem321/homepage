import React from "react";
import './style.css';

const Education = () => {
    return (
        <div>
            <div class="section bg">
                <h1>Brandeis University<br></br>
                </h1>
            </div>
            <div class="csSection">
                <h2>Computer Science B.S.</h2>
                <div class="description">
                    <b>[Primary Major]</b> Bachelor of Science<br></br>
                    <b>[Courses]</b>: Statistical Machine Learning, 
                             Data Structures and the Fundementals of Computing, 
                             Theory of Computation, 
                             Operating Systems, 
                             Fundementals of Software Engineering, 
                             Fundementals of Artificial Intelligence,
                             Web Application Development,
                             Advanced Programming Techniques in Java, 
                             Problem Solving in Python,
                             Independent Study(Dr.Pengyu Hong),
                             Senior Thesis (Dr.Pengyu Hong)<br></br>
                    <b>[Projects]</b>: <a href="https://github.com/nicolem321/personalApp">Orientation Helper App</a>: 
                                       This web app was designed when I was an orientation leader for me school, 
                                       I designed the app aiming to help incoming students to have all the information
                                       they need gathered on one page, recommend them American TA shows, and help them 
                                       manage their time better using the planner feature. <br></br>
                                       <a href="https://github.com/nicolem321/Hand-Written-Equation-Recognizition">Hand Written Equation Recognization</a>: 
                                       The goal of this project was to design a CNN model that will accurately recognize handwritten math equations out of ten categories. 
                                       Through the project, we also established a successful data pipeline that consisted of several augmenting steps, applied augmentation techniques such as random rotations and gaussian blur to increase the reliability and certainty of our results. <br></br>
                                       <a href="https://github.com/nicolem321/COSI103A-CPA2">Train Station Finder</a>: 
                                       This Station Finder app was designed using Mongoose with the purpose of querying data. Users will be able to search up 
                                       station information by quering different key components of the station.<br></br>
                                       <a href="localhost:3000">Personal Website</a>: 
                                       This website was designed using React.js and serves as my personal home page. 
                    
                </div>
                <h2>Applied Mathematics B.S.</h2>
                    <div class="description">
                        <b>[Secondary Major]</b> Bachelor of Science<br></br>
                        <b>[Courses]</b>: Optimization, Numerical Methods and Big Data,
                                          Fourier Analysis and Advanced Calculus,
                                          Probability, Introduction to Applied Mathmetics, 
                                          Multi-variable Calculus, Introduction to Proofs, 
                                          Applied Linear Algebra, Techniques of Calculus. <br></br>
                        <b>[Projects]</b>: <a href="https://github.com/kyrarivest/MATH122FinalProject-UserRatingPrediction">User Rating Prediction</a>: 
                        Final project for Math122a - Numerical Methods and Big Data. We used a K-nearest neighbors inspired model to predict product ratings for 4500 given users. 
                        We tested out the model with two different distance metrics: k-nearest neighbor algorithm, Euclidean distance, and Modified Euclidean Distance with a hyperparameter search. 
                    </div>
                <h2>Economics B.A.</h2>
                <div class="description">
                        <b>[Additional  Major]</b> Bachelor of Arts<br></br>
                        <b>[Courses]</b>: Econometrics, Industrial Organization, 
                                          The Global Economy, Microeconomic Theory,
                                          Statistics for Economic Analysis, 
                                          Macroeconomic Theory, The Economics of Education, 
                                          Intro to Macroeconomics, Intro to Microeconomics<br></br>
                        <b>[Projects]</b>: <a href="https://docs.google.com/document/d/1XTHRj7m1JL8o_ww5x8gACbbWtcoDnTwU4irqipBEwzE/edit?usp=sharing">Examining the Validity of "The Effects of Professors Gender on the Post-Graduation Outcomes of Female Students"</a>: 
                                           Final Project for the Economics of Education. The paper aims to study the relationship between being assigned a female professor 
                                           and the future probabilities of getting a STEM master’s degree and working in STEM areas for female students.
                                           I examined the the internal and external validity of this reserach paper and provided critism in many aspects. <br></br>
                                           <a href="file:///Users/nicolemeng/Downloads/FinalProjectCode.html">Housing Price Prediction</a>: 
                                           A random sample of actual housing market transactions in the state of New York is provided. 
                                           The dataset contains almost everything that is reported to tax authorities: buyer and seller names, sales price, year, structural information, etc. 
                                           The goal is to construct a model that predicts historical housing market prices as close as possible using R. 
                    </div>
            </div>

        </div>
    );
}


export default Education;