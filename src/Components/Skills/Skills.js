import React, { useState, useEffect } from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faBuilding, faCalendarAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons"
import Button from '../Common/Button/Button'

const Skills = () => {

    const [ experience ] = useState(
        [
            {
                title: "Web UI Developer",
                company: "Globant",
                date: "June 2022 - July 2023",
                functions: {
                    description: "Integrate directly into the client's team and work alongside their existing designers and engineers daily.",
                    details:    "<li>Developed an online magazine using NextJS.</li>"+
                                "<li>Supported the implementation of CI/CD practices, reducing delivery times and increasing error mitigation efficiency.</li>"+
                                "<li>Implemented web performance optimizations, achieving improved display and loading times.</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Tita Media",
                date: "January 2021 - June 2021",
                functions: {
                    description: "Develop solutions adapted to customer needs.",
                    details:    "<li>Created ReactJS components for VTEX, significantly improving development efficiency across projects.</li>"+
                                "<li>Enhanced the loading time and efficiency of web products through file compression and image optimization.</li>"+
                                "<li>Designed and built client websites using WordPress.</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Laika",
                date: "December 2019 - March 2020",
                functions: {
                    description: "Work with the UI/UX designer to study the technical implementation and include the translation of design wireframes into actual code that will produce visual elements of the application.",
                    details:    "<li>Developed a component library with React Native for a new Android and iOS platform.</li>"+
                                "<li>Collaborated with UX/UI designers and backend developers to resolve issues and improve site functionality.</li>"
                }
            },
            {
                title: "Frontend / Development Leader",
                company: "SoftArs",
                date: "April 2018 - April 2019",
                functions: {
                    description: "Lead efforts to develop and design frontend applications, web user interfaces, standalone websites, and the tools to navigate websites.",
                    details:    "<li>Lead a team of developers, assigning tasks and fostering a collaborative environment to boost productivity."+
                                "<li>Coordinated with design, marketing, and product management teams to align technological efforts with strategic objectives.</li>"+
                                "<li>Utilized Agile methodologies for efficient project planning and delivery, ensuring timely completion of tasks.</li>"+
                                "<li>Conducted code reviews to ensure quality and maintainability.</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Minami Design",
                date: "October 2017 - April 2018",
                functions: {
                    description: "Develop web layout according to the design approved by the client.",
                    details:    "<li>Built the company's primary website using WordPress.</li>"+
                                "<li>Use ReactJS to create a dashboard for Aera.</li>"+
                                "<li>Created a dashboard for the Aera client using ReactJS.</li>"
                }
            },
            {
                title: "Web Developer",
                company: "Lear Express",
                date: "October 2014 - August 2015",
                functions: {
                    description: "Redesign the website and web API, achieving a more friendly and intuitive design for users of the company's service. In addition to using analysis tools to optimize loading times and improve SEO management.",
                    details:    "<li>Develop and maintain the company's main website using WordPress.</li>"+
                                "<li>Applied SEO practices to enhance site visibility.</li>"+
                                "<li>Optimized responsiveness for diverse devices and screen sizes.</li>"+
                                "<li>Collaborated with the backend team, performing tasks in PHP.</li>"
                }
            },
            {
                title: "Web Developer and Graphic Designer",
                company: "Fundación CENAMEC",
                date: "July 2013 - September 2014",
                functions: {
                    description: "Develop a portal for the dissemination of news about the works, events, and achievements of the foundation. Implement a digital material distribution system for national teacher training.",
                    details:    "<li>Led the development of a teacher education portal, providing access to educational materials such as PDFs and videos.</li>"+
                                "<li>Use and modify add-ons and plugins for web portal management.</li>"
                }
            },
            {
                title: "Web Developer",
                company: "Tecnología Venova, C.A.",
                date: "August 2010 - September 2011",
                functions: {
                    description: "Design and develop the company's website, creating a catalog to offer their products and services.",
                    details:    "<li>Developed an e-commerce platform using Joomla.</li>"+
                                "<li>Customized plugins using PHP to meet development needs."
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
                title: "Languages",
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

    useEffect(() => {
            const items = document.querySelectorAll('.data')
    
            const handleFocus = (e) => {
                e.target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }
    
            items.forEach(item => {
                item.addEventListener('focus', handleFocus)
            })
    
            return () => {
                items.forEach(item => {
                    item.removeEventListener('focus', handleFocus)
                })
            }
        }, [])

    return (
        <div className="container" id='experience'>
            <div className="skills content">
                <div className="skills__box">
                    <section>
                        <div className="experience__section">
                            <h1>Experience</h1>
                            <div className="experience">
                                {
                                    experience.map((experience, key) =>
                                        <div className="experience__data" key={key}>
                                            <div className="data box" tabIndex="0">
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
                        
                        <a className="ghost__btn" href="https://drive.google.com/file/d/1qoV6yiPjRjc55rsfwb-CMWKCTISbpSDY/view?usp=drive_link" target="_blank" rel="noopener noreferrer" ><Button className='ghost__btn' text='Download CV'/></a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills
