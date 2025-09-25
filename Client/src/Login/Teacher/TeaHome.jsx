import React from 'react'
import { Link } from 'react-router'
import { useEffect, useRef } from 'react';

const TeaHome = () => {

    useEffect(() => {
        let hr = document.querySelector("#hr");
        let mn = document.querySelector("#mn");
        let sc = document.querySelector("#sc");
        const interval = setInterval(() => {
            let day = new Date();

            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="row m-0 d-flex align-items-center justify-content-center">
                <div class="m-0 dash-home-left d-flex align-items-center justify-content-center position-relative flex-wrap gap-4">
                    <div class="dash-card position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4">
                        <div class="imgbox d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-clipboard-list text-white"></i>
                        </div>
                        <div class="content position-absolute px-4 w-100">
                            <h2 className='justify-text fs-5'>No of Quiz Created: 100</h2>
                            <p class="m-0">Design and publish custom quizzes for your students in minutes.</p>
                            <div className="dash-card-btn py-3 d-flex align-items-center justify-content-center"><Link to="/" class="text-decoration-none btn btn-outline-dark">Create Quiz</Link></div>
                        </div>
                    </div>
                    <div class="dash-card position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4">
                        <div class="imgbox d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-file-upload text-white"></i>
                        </div>
                        <div class="content position-absolute px-4 w-100">
                            <h2 className='justify-text fs-5'>No of Submission: 99</h2>
                            <p class="m-0">Review student responses and manage grading efficiently.</p>
                            <div className="dash-card-btn py-3 d-flex align-items-center justify-content-center"><Link to="/" class="text-decoration-none btn btn-outline-dark">View Submission</Link></div>
                        </div>
                    </div>
                    <div class="dash-card position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                        <div class="imgbox d-flex align-items-center justify-content-center">
                            <i class="fa-regular fa-circle-question text-white"></i>
                        </div>
                        <div class="content position-absolute px-4 w-100">
                            <h2 className='justify-text fs-5'>Question in Bank:111</h2>
                            <p class="m-0">Access and organize reusable questions for future assessments.</p>
                            <div className="dash-card-btn py-3 d-flex align-items-center justify-content-center"><Link to="/" class="text-decoration-none btn btn-outline-dark">Visit Bank</Link></div>
                        </div>
                    </div>
                    <div class="dash-card mt-3 position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                        <div class="imgbox d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-comments text-white"></i>
                        </div>
                        <div class="content position-absolute px-4 w-100">
                            <h2 className='justify-text fs-5'>No of Feedback: 11</h2>
                            <p class="m-0">Share insights and suggestions to help students improve.</p>
                            <div className="dash-card-btn py-3 d-flex align-items-center justify-content-center"><Link to="/" class="text-decoration-none btn btn-outline-dark">Review Feedback</Link></div>
                        </div>
                    </div>
                    <div class="dash-card mt-3 position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                        <div class="imgbox d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-chart-line text-white"></i>
                        </div>
                        <div class="content position-absolute px-4 w-100">
                            <h2 className='justify-text fs-5'>Analytics</h2>
                            <p class="m-0">Track performance trends and quiz engagement at a glance.</p>
                            <div className="dash-card-btn py-3 d-flex align-items-center justify-content-center"><Link to="/" class="text-decoration-none btn btn-outline-dark">See Analysics</Link></div>
                        </div>
                    </div>
                    <div class="dash-card mt-3 position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                        <div class="imgbox d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-user-gear text-white"></i>
                        </div>
                        <div class="content position-absolute px-4 w-100">
                            <h2 className='justify-text fs-5'>Profile Setting</h2>
                            <p class="m-0">Update your details, preferences, and dashboard configurations.</p>
                            <div className="dash-card-btn py-3 d-flex align-items-center justify-content-center"><Link to="/" class="text-decoration-none btn btn-outline-dark">Visit Setting</Link></div>
                        </div>
                    </div>
                </div>
                <div className="dash-home-right my-2 p-0 ps-4">
                    <div className="clock-container">
                        <div className="dash-clock">

                            <div className="circle" id="sc" style={{ '--clr': '#2C0735' }}><i></i></div>
                            <div className="circle circle2" id="mn" style={{ '--clr': '#2E2D4D' }}><i></i></div>
                            <div className="circle circle3" id="hr" style={{ '--clr': '#161B33' }}><i></i></div>

                            <span style={{ '--i': 1 }}><b>1</b></span>
                            <span style={{ '--i': 2 }}><b>2</b></span>
                            <span style={{ '--i': 3 }}><b>3</b></span>
                            <span style={{ '--i': 4 }}><b>4</b></span>
                            <span style={{ '--i': 5 }}><b>5</b></span>
                            <span style={{ '--i': 6 }}><b>6</b></span>
                            <span style={{ '--i': 7 }}><b>7</b></span>
                            <span style={{ '--i': 8 }}><b>8</b></span>
                            <span style={{ '--i': 9 }}><b>9</b></span>
                            <span style={{ '--i': 10 }}><b>10</b></span>
                            <span style={{ '--i': 11 }}><b>11</b></span>
                            <span style={{ '--i': 12 }}><b>12</b></span>
                        </div>
                    </div>

                <div className="dash-calendar mt-3"></div>
                </div>
            </div>
        </>
    )
}

export default TeaHome