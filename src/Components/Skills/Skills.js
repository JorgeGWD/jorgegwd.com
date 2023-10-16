import React, { useState } from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faBuilding, faCalendarAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons"

const Skills = () => {

    const [ experience ] = useState(
        [
            {
                title: "Web UI Developer",
                company: "Globant",
                date: "June 2022 - June 2023",
                functions: {
                    description: "Integrate directly into the client's team and work alongside their existing designers and engineers daily.",
                    details:    "<li>Take control of designing and implementing solutions for the most complex areas of the team's codebase in all phases of the software development lifecycle.</li>"+
                                "<li>Represent the team in technical discussions with team leads, product, design, and all other external stakeholders.</li>"+
                                "<li>Collaborate closely with DevOps/DevSuccess to drive iterative improvements to your team's build system, test automation, and CI/CD pipelines.</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Tita Media",
                date: "March 2021 - June 2021",
                functions: {
                    description: "Develop solutions adapted to customer needs.",
                    details:    "<li>Convert an outdated frontend architecture into easy-to-read components using ReactJS for the VTEX platform.</li>"+
                                "<li>Optimize VTEX load.</li>"+
                                "<li>Adjust the layout for WordPress.</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Laika",
                date: "December 2019 - March 2020",
                functions: {
                    description: "Work with the UI/UX designer to study the technical implementation and include the translation of design wireframes into actual code that will produce visual elements of the application.",
                    details:    "<li>Create reusable code and libraries for future use.</li>"+
                                "<li>Optimize the application for maximum speed and scalability.</li>"+
                                "<li>Make sure all user input is validated before sending it to the backend.</li>"+
                                "<li>Connect the API to the application.</li>"
                }
            },
            {
                title: "Frontend / Development Lead",
                company: "SoftArs",
                date: "April 2018 - April 2019",
                functions: {
                    description: "Lead efforts to develop and design frontend applications, web user interfaces, standalone websites, and the tools to navigate websites.",
                    details:    "<li>Make frontend decisions: technology, methodology, architecture.</li>"+
                                "<li>Team management and workflow development.</li>"+
                                "<li>Participate in discussions regarding development scoping, creative review, and UI/UX.</li>"+
                                "<li>Lead code review with other developers.</li>"
                }
            },
            {
                title: "Frontend / Development Lead",
                company: "Minami Digital",
                date: "October 2017 - April 2018",
                functions: {
                    description: "Develop web layout according to the design approved by the client.",
                    details:    "<li>Use CMS (WordPress).</li>"+
                                "<li>Use ReactJS to create a dashboard for Aera.</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Lear Express",
                date: "October 2014 - August 2015",
                functions: {
                    description: "Redesign the website and web API, achieving a more friendly and intuitive design for users of the company's service. In addition to using analysis tools to optimize loading times and improve SEO management.",
                    details:    "<li>Use CMS (WordPress) for better content management and modification.</li>"+
                                "<li>Use and modify plugins.</li>"+
                                "<li>Analyze and optimize SEO.</li>"+
                                "<li>Implement responsive design.</li>"
                }
            },
            {
                title: "Web Developer and Graphic Designer",
                company: "Fundación CENAMEC",
                date: "July 2013 - September 2014",
                functions: {
                    description: "Develop a portal for the dissemination of news about the works, events, and achievements of the foundation. Implement a digital material distribution system for national teacher training.",
                    details:    "<li>Create digital platforms using a CMS (Joomla).</li>"+
                                "<li>Use and modify plugins for news and event management.</li>"+
                                "<li>Use SEO to position both portals.</li>"+
                                "<li>Analyze the user system.</li>"+
                                "<li>Analyze and categorize content.</li>"
                }
            },
            {
                title: "Web Developer",
                company: "Tecnología Venova, C.A.",
                date: "August 2010 - September 2011",
                functions: {
                    description: "Design and develop the company's website, creating a catalog to offer their products and services.",
                    details:    "<li>Layout in HTML and layout in CSS and JavaScript.</li>"+
                                "<li>Implement a CMS (Joomla) to create a catalog of products and services.</li>"+
                                "<li>Using and modifying plugins.</li>"
                }
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
                skills: "ReactJS, React Native, SASS, LESS, MaterialUI for React, Bootstrap, Materialize CSS, JQuery."
            },
            {
                title: "Other skills",
                skills: "Wordpress, Design UI/UX, Responsive design, API manipulation, CI/CD."
            }
    ])

    return (
        <div className="container">
            <div className="skills content">
                <div className="skills__box">
                    <section>
                        <div className="experience__section">
                            <h1>Experience</h1>
                            <div className="experience">
                                {
                                    experience.map((experience, key) =>
                                        <div className="experience__data" key={key}>
                                            <div className="data box">
                                                <div className="experience__data__info title">
                                                    <FontAwesomeIcon icon={faDesktop} /><h2>{experience.title}</h2>
                                                </div>
                                                <div className="experience__data__info place">
                                                    <FontAwesomeIcon icon={faBuilding} /><span>{experience.company}</span>
                                                </div>
                                                <div className="experience__data__info date">
                                                    <FontAwesomeIcon icon={faCalendarAlt} /><p>{experience.date}</p>
                                                </div>
                                            </div>
                                            <div className="line">
                                                <FontAwesomeIcon icon={faMapMarker} />
                                            </div>
                                            <div className="list">
                                                    <h4>Description:</h4>
                                                    <p>{experience.functions.description}</p>
                                                    <h4>Details:</h4>
                                                <ul dangerouslySetInnerHTML={{
                                                    __html: experience.functions.details
                                                }}>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="skills__section">
                            <h1>Skills</h1>
                            <div className="skills__content">
                                {
                                    skills.map((skills, key) =>
                                        <div id={skills.id} className="skills__data" key={key}>
                                            <h2>{skills.title}</h2>
                                            <p>{skills.skills}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <a className="ghost__btn" href="https://drive.google.com/file/d/1ciB9e4VEioH8PamlF_rByStrzFOOFbTO/view?usp=drive_link" target="_blank" rel="noopener noreferrer" ><p>Download CV</p></a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills
