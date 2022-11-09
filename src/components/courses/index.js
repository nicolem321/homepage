import React from "react";
import './style.css';

const Courses = () => {
    return (
        <div class="box">
            <h1 className="nameWrapper">Courses Taught</h1>
            <div class="box1">
                • <b>Head Teaching Assistant</b>: <em>Data Structures and Fundementals of Computing</em>, Prof. Iraklis Tsekourakis, Fall2022<br></br>
                • <b>Teaching Assistant</b>: <em>Data Structures and Fundementals of Computing</em>, Prof. Antonella Di Lillo, Spr2022<br></br>
                • <b>Head Teaching Assistant</b>: <em>Problem Solving in Python</em>, Prof. Iraklis Tsekourakis, Fall2021 - Summer2022<br></br>
                • <b>Teaching Assistant</b>: <em>Econometrics</em>, Prof. YinChu Zhu, Spr2022<br></br>
                • <b>Teaching Assistant</b>: <em>Problem Solving in Python</em>, Prof. Timothy Hickey, Spr2021<br></br>
            </div>
        </div>
    );
}

export default Courses;