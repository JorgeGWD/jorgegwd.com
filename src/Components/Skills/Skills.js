import React, { useState } from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faBuilding, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {

    const [ experience ] = useState(
        [
            {
                title: "Frontend Developer",
                company: "Laika",
                date: "December 2019 - March 2020"
            },
            {
                title: "Frontend Developer",
                company: "Tigy",
                date: "July 2019 - October 2019"
            },
            {
                title: "Development Lead / Frontend",
                company: "SoftArs",
                date: "April 2018 - April 2019"
            },
            {
                title: "Development Lead / Frontend",
                company: "Minami Digital",
                date: "October 2017 - April 2018"
            },
            {
                title: "Frontend Developer",
                company: "Lear Express",
                date: "October 2014 - August 2015"
            },
            {
                title: "Web Developer and Graphic Designer",
                company: "Fundación CENAMEC",
                date: "July 2013 - September 2014"
            },
            {
                title: "Web Developer",
                company: "Tecnología Venova, C.A.",
                date: "August 2010 - September 2011"
            }
    ])

    const [ skills ] = useState(
        [
            {
                title: "Tools",
                skills: "Visual Studio Code, Sublime Text, Git (Github, Bitbucket, Gitlab), Jira, Trello, Slack."
            },
            {
                title: "Languajes",
                skills: "Javascript, PHP, HTML/5, CSS/3, Bash."
            },
            {
                title: "Frameworks And Libraries",
                skills: "React, Redux, React Native, SASS, LESS, MaterialUI for React, Bootstrap, Materialize CSS, JQuery."
            },
            {
                title: "Other skills",
                skills: "Wordpress, Design UI/UX, Responsive design."
            }
    ])

    return (
        <div className="container">
            <div className="skills content">
                <div className="skills-box">
                    <section>
                        <div className="experience-section">
                            <h1>Experience</h1>
                            <div className="experience">
                                {
                                    experience.map((experience, key) =>
                                        <div id={experience.id} className="experience-data box" key={key}>
                                            <div className="experience-data-info title">
                                                <FontAwesomeIcon icon={faDesktop} /><h2>{experience.title}</h2>
                                            </div>
                                            <div className="experience-data-info place">
                                                <FontAwesomeIcon icon={faBuilding} /><span>{experience.company}</span>
                                            </div>
                                            <div className="experience-data-info date">
                                                <FontAwesomeIcon icon={faCalendarAlt} /><p>{experience.date}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="skills-section">
                            <h1>Skills</h1>
                            {
                                skills.map((skills, key) =>
                                    <div id={skills.id} className="skills-data" key={key}>
                                        <h2>{skills.title}</h2>
                                        <p>{skills.skills}</p>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills
