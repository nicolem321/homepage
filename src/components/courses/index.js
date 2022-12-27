import React from "react";
import './style.css';

const Courses = () => {
    return (
        <div class="box">
            <h1 className="nameWrapper1">Courses Taught</h1>
            <div className="box1">
            <div className = "box3">
                • <b>Head Teaching Assistant</b>: <em>Operating Systems</em>, Prof. Pito Salas, Spr2023<br></br>
                • <b>Head Teaching Assistant</b>: <em>Data Structures and Fundementals of Computing</em>, Prof. Iraklis Tsekourakis, Fall2022 - Spr2023<br></br>
                • <b>Teaching Assistant</b>: <em>Data Structures and Fundementals of Computing</em>, Prof. Antonella Di Lillo, Spr2022<br></br>
                • <b>Head Teaching Assistant</b>: <em>Problem Solving in Python</em>, Prof. Iraklis Tsekourakis, Fall2021 - Summer2022<br></br>
                • <b>Teaching Assistant</b>: <em>Econometrics</em>, Prof. YinChu Zhu, Spr2022<br></br>
                • <b>Teaching Assistant</b>: <em>Problem Solving in Python</em>, Prof. Timothy Hickey, Spr2021<br></br>
            </div>
            <div className = "box2">
                <img src={require('./teaching.png')} width="40%" height="30%" />
            </div>
            </div>
        </div>
    );
}

export default Courses;