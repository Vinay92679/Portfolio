import React from "react";
import "../App.css";
import { Link } from "react-scroll";


const About = () => {
    return(
        <>
        <div className="about-section py-3" name="about">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-none d-md-block">
                        <div className="text-start d-flex align-items-center mb-5 mb-md-0 h-100">
                            <img src="../../public/about_me_json.png" alt="" className="w-75 rounded-4 " />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-3 d-inline-block text-white">About</h1><span className="display-3 theme-yellow"> Me</span>
                        <p className="text-gray">Hello! I’m Vinay Singh, a passionate frontend developer with a strong foundation in creating dynamic and responsive web applications. I hold a BCA degree from Glocal University, where I developed a deep understanding of programming and software development.</p>
                        <p className="text-gray">With hands-on experience in HTML, CSS, JavaScript, and frameworks like React and Redux, I love building user-friendly interfaces that not only look great but also provide seamless user experiences. I recently completed a 6-month internship as a frontend developer, where I honed my skills in maintaining and enhancing web applications using ReactJS.</p>
                        <p className="text-gray">In addition to coding, I enjoy trekking and exploring new places, which allows me to bring a fresh perspective and creativity into my work. If you are looking for a developer who is dedicated, adaptable, and always eager to learn, I’d love to connect!</p>
                        <div>
                        <Link 
                            to = "contact"
                            className={`navlink`}
                            smooth={true}
                            duration={10}
                            offset={50}
                            >
                            <button className="yellow-button">Contact</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;