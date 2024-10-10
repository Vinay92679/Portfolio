import React from "react";
import "../App.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const HeroSection = () => {
    return(
        <>
        <div className="HeroSection" name="hero">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6 boder border-danger">
                        <div>
                            <h1 className="mb-0 fs-1 fw-light d-inline-block">Hello,</h1><span className="fs-1 fw-light theme-yellow"> welcome</span>
                            <h1 className="mb-0 display-6">I am Vinay Singh</h1>
                            <h1 className="mb-0">Front End Developer</h1>
                            <div className="d-flex gap-3 mt-5">
                                <a href="https://github.com/Vinay92679" target="_blank" className="text-decoration-none text-dark">
                                    <button className="white-btn">Github</button>
                                </a>
                                <a href="/Vinay_Singh_Resume.pdf" download="Vinay_Singh_Resume.pdf">
                                    <button className="yellow-button">Resume</button>
                                </a>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <span>
                                    <a href="https://github.com/Vinay92679" className="text-decoration-none text-dark" target="_blank">
                                        <FaGithub className="icons"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/vinay-singh-619716224/" target="_blank">
                                        <FaLinkedin className="icons" style={{color:"#0284c7"}}/>
                                    </a>
                                </span>
                                <span>
                                    <a href="mailto:vsfriendz011@gmail.com">
                                        <IoIosMail className="icons" style={{color:"#ED4135"}}/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection;