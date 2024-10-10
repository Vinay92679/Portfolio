import React from "react";

const Skills = () => {

    const skills = [
        {
            name : "ReactjS",
            image : "reactjs.png"
        },
        {
            name : "HTML",
            image : "HTML.png"
        },
        {
            name : "CSS",
            image : "css.png"
        },
        {
            name : "JavaScript",
            image : "javascript.png"
        },
        {
            name : "Git",
            image : "git.png"
        },
        {
            name : "VS code",
            image : "vscode.png"
        },
        {
            name : "Redux",
            image : "redux.png"
        },
        {
            name : "Bootstrap",
            image : "bootstrap.png"
        },
        {
            name : "Github",
            image : "github.png"
        }
    ]
    return(
        <>
            <div className="skill-section py-3" name="skills">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="d-flex gap-2">
                            <h1 className="display-5 text-white">My</h1><span className="display-5 fw-bold theme-yellow"> Skills</span>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex justify-content-center flex-wrap gap-3 py-5">
                                {
                                    skills.map((items, index)=>(
                                        <div className="skill-card d-inline-block py-3 px-2 rounded-3 text-center" key={index}>
                                            <img src={`../../public/${items.image}`} />
                                            <p className="text-white m-0">{items.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;