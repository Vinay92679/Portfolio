import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Project = () => {
    return(
        <>
            <div className="project-section py-4" name="projects">
                <div className="container py-5">
                    <div className="row mb-0 mb-md-5 pb-5">
                        <div className="text-center mb-0 mb-md-5">
                            <h1 className="text-white display-5 mb-5">My <span className="theme-yellow fw-bold">Projects</span></h1>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-5 mb-md-0 text-center h-100 d-flex align-items-center">
                                <img src="/ecommerce.png"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h1 className="display-6 fw-bold theme-yellow mb-3">Shopperstore</h1>
                                <div className="technologies d-flex flex-wrap gap-2 mb-3">
                                    <span>ReactJS</span><span>Bootstrap</span><span>CSS</span><span>Javascript</span><span>axios</span><span>REST Api</span><span>React-icons</span>
                                    <span>react-slick</span><span>react-router-dom</span><span>context api</span>
                                </div>
                                <p className="text-gray">ShopperStore is a dynamic e-commerce website designed and developed entirely by me, offering a seamless shopping experience to users. Built using React, Bootstrap for styling, Context API for state management, React Router DOM for navigation, and Axios for API integration, the platform is both user-friendly and efficient.</p>
                                <p className="text-gray">The website includes several key features such as:</p>
                                <ul>
                                    <li className="text-gray"><strong>Search Functionality : </strong>Allows users to quickly find products by name.</li>
                                    <li className="text-gray"><strong>Category-based Filtering : </strong>Users can filter products based on various categories.</li>
                                    <li className="text-gray"><strong>Company-based Filtering : </strong>Offers filtering options based on product brands or companies.</li>
                                    <li className="text-gray"><strong>Price-based Sorting : </strong>Enables users to sort products according to their price range.</li>
                                    <li className="text-gray"><strong>List and Grid View : </strong>Users can choose between list or grid view to browse products.</li>
                                </ul>
                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <button className="yellow-button d-flex align-items-center gap-2">
                                        <FaGithub className="fs-4"/>
                                        <a href="https://github.com/Vinay92679/shopperstore" className="text-decoration-none text-dark" target="_blank">Source code</a>
                                    </button>
                                    <button className="white-btn d-flex align-items-center gap-2">
                                        <FaPlay/> 
                                       <a href="https://shoppersstoree.netlify.app/" className="text-decoration-none text-dark" target="_blank">Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-0 my-md-5 py-5">
                        <div className="col-md-6 order-last order-md-first">
                        <div>
                            <h1 className="display-6 fw-bold theme-yellow mb-3">News Website Template</h1>
                            <div className="technologies d-flex flex-wrap gap-2 mb-3">
                                <span>HTML</span><span>CSS</span><span>Bootstrap</span><span>font awesome</span>
                            </div>
                            <p className="text-gray">News Website Template is a clean and responsive static website template that I designed and developed, aimed at providing a professional layout for news or blog websites. The template is built using HTML, CSS, Bootstrap, and Font Awesome to ensure a modern and user-friendly design.<br/>This template features a visually appealing layout with well-organized sections for headlines, articles, and categories. It is fully responsive, making it adaptable to various screen sizes and devices.</p>
                            <p className="text-gray">As both the developer and designer, I focused on creating an intuitive structure that can serve as a base for any news-based content platform. The project showcases my ability to design aesthetically pleasing and functional web templates, even in a static format.</p>
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <button className="yellow-button d-flex align-items-center gap-2">
                                    <FaGithub className="fs-4"/>
                                    <a href="https://github.com/Vinay92679/newsWebTemplate" className="text-decoration-none text-dark" target="_blank">Source code</a>
                                </button>
                                <button className="white-btn d-flex align-items-center gap-2">
                                    <FaPlay/> 
                                   <a href="https://newwebtemplate.netlify.app/" className="text-decoration-none text-dark" target="_blank">Live Demo</a>
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-5 mb-md-0 text-center h-100 d-flex align-items-center">
                            <img src="/newsWebtemplate_img.png"/>
                        </div>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <div className="mb-5 mb-md-0 text-center h-100 d-flex align-items-center">
                                <img src="/FindPixels_img.png"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h1 className="display-6 fw-bold theme-yellow mb-3">Findpixels</h1>
                                <div className="technologies d-flex flex-wrap gap-2 mb-3">
                                    <span>ReactJS</span><span>Bootstrap</span><span>Javascript</span><span>CSS</span><span>React-icons</span>
                                    <span>Vite</span><span>react-toastify</span><span>REST Api</span><span>react-router-dom</span>
                                </div>
                                <p className="text-gray">Findpixels is a user-friendly image search web application designed and developed entirely by me. Built using ReactJS, Bootstrap, CSS, Axios, react-router-dom, and REST APIs, the app offers a seamless experience for users looking to search and save images.</p>
                                <p className="text-gray">Key features of the application include:</p>
                                <ul className="text-gray">
                                    <li><strong>Search Functionality : </strong>Users can easily search for images based on keywords.</li>
                                    <li><strong>Save Images : </strong>By clicking on an image, users can save it directly to their local storage.</li>
                                    <li><strong>Saved Images Section : </strong>A dedicated section allows users to view all the images they have saved with a simple click on the "Saved" button.</li>
                                    <li><strong>Category-Based Quick Search : </strong> Predefined category buttons enable users to quickly access images related to specific topics without having to type search queries manually.</li>
                                </ul>
                                <p className="text-gray">I took on the role of designer, developer, and API integrator for this project, ensuring a visually appealing design and a smooth, responsive user experience. Findpixels showcases my skills in building interactive and practical web applications from scratch.</p>
                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <button className="yellow-button d-flex align-items-center gap-2">
                                        <FaGithub className="fs-4"/>
                                        <a href="https://github.com/Vinay92679/Findpixels" className="text-decoration-none text-dark" target="_blank">Source code</a>
                                    </button>
                                    <button className="white-btn d-flex align-items-center gap-2">
                                        <FaPlay/> 
                                       <a href="https://findpixels.netlify.app" className="text-decoration-none text-dark" target="_blank">Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;