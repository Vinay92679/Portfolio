import React, { useState } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "../App.css";
import {Link} from "react-scroll";

const Header = () => {

    const [activeLink, setActiveLink] = useState('');

    return(
        <>
            <Navbar className="navbar" variant="dark" expand="md">
                <div className="container">
                <Navbar.Brand className="navbarBrand"><code className="theme-yellow fs-4">&lt;</code><span className="fs-3 fw-bold">Vinay</span><code className="theme-yellow fs-4">/&gt;</code></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center gap-5 py-5 py-md-0">
                            <Link 
                            to = "hero"
                            className={`navlink ${activeLink === "hero" ? "active" : ""}`}
                            smooth={true}
                            duration={10}
                            offset={50}
                            onSetActive={()=>setActiveLink("hero")}
                            spy={true}
                            >HOME
                            </Link>

                            <Link 
                            to = "about"
                            className={`navlink ${activeLink === "about" ? "active" : ""}`}
                            smooth={true}
                            duration={10}
                            offset={50}
                            onSetActive={()=>setActiveLink("about")}
                            spy={true}
                            >ABOUT
                            </Link>

                            <Link 
                            to = "skills"
                            className={`navlink ${activeLink === "skills" ? "active" : ""}`}
                            smooth={true}
                            duration={10}
                            offset={50}
                            onSetActive={()=>setActiveLink("skills")}
                            spy={true}
                            >SKILLS
                            </Link>

                            <Link 
                            to = "projects"
                            className={`navlink ${activeLink === "projects" ? "active" : ""}`}
                            smooth={true}
                            duration={10}
                            offset={50}
                            onSetActive={()=>setActiveLink("projects")}
                            spy={true}
                            >PROJECTS
                            </Link>

                            <Link 
                            to = "contact"
                            className={`navlink ${activeLink === "contact" ? "active" : ""}`}
                            smooth={true}
                            duration={10}
                            offset={50}
                            onSetActive={()=>setActiveLink("contact")}
                            spy={true}
                            >CONTACT
                            </Link>
                        </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}

export default Header;