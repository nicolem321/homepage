import React from "react";
import './style.css';

const IntroCard = () => {
    return (
            <div className="row">
            <div className="pictureWrapper">
                <div className="frame">
                    <img src={require('./NicoleM.png')} />
                </div>
                <div className="contactBlock">
                    Email: ziyimeng@brandes.edu
                    Linkedin: <a href="https://www.linkedin.com/in/nicole-meng-ab80651b5/">nicole-meng</a><br></br>
                    Tel: +1 (781) 775-6231
                </div>
            </div>
            <div>
            <div className="block">
                <h1 className="nameWrapper">Nicole Meng</h1>
                • Software Engineer at <a href="https://www.pega.com/what-is-pega?&utm_source=google&utm_medium=cpc&utm_campaign=G_US_Brand_Core_(CPN-103042)_EN&utm_term=pegasystems&gloc=9002071&utm_content=pcrid%7c623761998238%7cpkw%7ckwd-11104391%7cpmt%7cb%7cpdv%7cc%7c&gclid=CjwKCAjwtp2bBhAGEiwAOZZTuGBskJ-q_8HE1iZYLJWe_yWVMKnYM03Xdl73gGnoSsHypEDGGS2tpxoChfAQAvD_BwE&gclsrc=aw.ds">PegaSystems</a><br></br>
                • B.S.Candidate at <a href="https://www.brandeis.edu/">Brandeis University</a><br></br>
                • Computer Science | Applied Math | Economics <br></br>
                • Current Research: Adversarial Machine Learning<br></br>
                • Looking for Computer Science PhD Programs
                <br></br><br></br>
            </div>
            <div className="descriptionBlock">
                I am a current senior at Brandeis University triple majoring in Computer Science, Applied Math, and Economics.
                My undergraduate coursework include <a href="https://www.brandeis.edu/departments/computer-science/course-schedule/course?acad_year=2021&crse_id=014271&strm=1203&class_section=1">Optimization</a>,
                <a href="https://www.brandeis.edu/departments/computer-science/course-schedule/course?acad_year=2021&crse_id=011074&strm=1203&class_section=1"> Statistical Machine Learning</a>,
                <a href="https://www.brandeis.edu/departments/computer-science/graduate/course-schedule/course?acad_year=2023&crse_id=014240&strm=1223&class_section=1"> Numerical Mehtods and Big Data</a>.
                I am currently working with Professor <a href="https://www.cs.brandeis.edu/~hong/">Pengyu Hong</a> towards a thesis on the research topic of Adversarial Machine Learning, with a special focus
                on Black-box Decision-based Adversarial Attacks on image classification/recognition models. I am passionate about Computer Vision, Image Processing, and Machine Learning, but I am willing to explor other areas for potential projects as well. 
                I started working as a Full Stack Software Engineer Intern at Pegasystems after my junior year and the product of my team is the <a href="https://www.pega.com/insights/resources/pega-workforce-intelligence">Workforce Intelligence Bot</a>.
                I am also working as a Head Teaching Assistant for Professor <a href="https://tsekourakis.github.io/">Iraklis Tsekourakis</a> for the course <a href="https://www.brandeis.edu/departments/computer-science/course-schedule/course?acad_year=2021&crse_id=001722&strm=1211&class_section=1">Data Structures and Algorithms.</a>
            </div>
            <div/>
            </div>
        </div>

    );
}


export default IntroCard;