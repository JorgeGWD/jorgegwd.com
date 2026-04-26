import React, { useState, useEffect } from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faBuilding, faCalendarAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons"
import Button from '../Common/Button/Button'

const Skills = () => {

    const [ experience ] = useState(
        [
            {
                title: "Frontend Developer",
                company: "Freelance",
                date: "2010 - Present",
                technologies: ["React", "Next.js", "TypeScript", "PHP/Laravel", "Node.js", "Sass", "REST API", "Figma"],
                details:    "<li>Designed and developed web interfaces for clients across multiple industries, delivering scalable and maintainable solutions.</li>"+
                            "<li>Translated UI/UX designs into responsive and functional applications using modern frontend technologies.</li>"+
                            "<li>Improved website performance and SEO, increasing visibility and user engagement.</li>"+
                            "<li>Built scalable frontend architectures using React and Next.js in recent projects.</li>"+
                            "<li><strong>Selected clients:</strong> grupominerosuperior.com (2025), lorussonet.com (2016), realtypropiedades.com (2012 - 2018).</li>"
            },
            {
                title: "Frontend Developer",
                company: "Flixcy",
                date: "Oct 2025 - Present",
                technologies: ["React", "Next.js", "TypeScript", "CSS", "REST API"],
                details:    "<li>Designed and developed frontend features using Next.js with a modular and reusable architecture.</li>"+
                            "<li>Built a reusable Wallet module, eliminating duplicated logic across user roles and reducing maintenance complexity.</li>"+
                            "<li>Implemented protected routes with authentication logic, improving access control and application security.</li>"+
                            "<li>Managed dynamic UI states based on backend responses, ensuring robust handling of empty and fallback states.</li>"+
                            "<li>Improved user navigation and accessibility by restructuring key flows.</li>"+
                            "<li>Integrated REST APIs for real-time data synchronization.</li>"+
                            "<li>Collaborated with backend teams to define upcoming features ensuring frontend scalability.</li>"+
                            "<li>Restructured the frontend architecture to improve scalability and maintainability.</li>"
            },
            {
                title: "Web UI Developer",
                company: "Globant",
                date: "Jun 2022 - Jul 2023",
                technologies: ["React", "Next.js", "TypeScript", "CI/CD", "Sass", "REST API"],
                details:    "<li>Developed a high-performance online magazine using Next.js.</li>"+
                            "<li>Contributed to CI/CD pipeline implementation, reducing deployment time and increasing reliability.</li>"+
                            "<li>Optimized application performance, improving load speed and responsiveness.</li>"
            },
            {
                title: "Frontend Developer",
                company: "Tita Media",
                date: "Jan 2021 - Jun 2021",
                technologies: ["React", "VTEX", "Sass", "REST API"],
                details:    "<li>Developed reusable React components for VTEX, improving development efficiency.</li>"+
                            "<li>Optimized asset loading and image delivery, improving performance.</li>"+
                            "<li>Built and customized WordPress websites based on client requirements.</li>"
            },
            {
                title: "Frontend Developer",
                company: "Laika",
                date: "Dec 2019 - Mar 2020",
                technologies: ["React Native", "GraphQL", "REST API"],
                details:    "<li>Developed a component library using React Native for Android and iOS.</li>"+
                            "<li>Collaborated with design and backend teams to improve product functionality.</li>"
            },
            {
                title: "Development Leader",
                company: "SoftArs",
                date: "Apr 2018 - Apr 2019",
                technologies: ["React", "TypeScript", "Angular", "Sass", "GraphQL", "CI/CD", "REST API"],
                details:    "<li>Led a team of developers, improving productivity and code quality.</li>"+
                            "<li>Coordinated with cross-functional teams to align technical solutions with business goals.</li>"+
                            "<li>Implemented Agile methodologies to improve delivery timelines.</li>"+
                            "<li>Conducted code reviews ensuring maintainability and best practices.</li>"
            },
            {
                title: "Frontend Developer",
                company: "Minami Design",
                date: "Oct 2017 - Apr 2018",
                technologies: ["JavaScript", "React", "HTML", "CSS", "WordPress"],
                details:    "<li>Built the company's primary website using WordPress.</li>"+
                            "<li>Translated designs into functional code using HTML, CSS, and JavaScript.</li>"+
                            "<li>Created a dashboard for the Aera client using React.</li>"
            },
            {
                title: "Web Developer",
                company: "Lear Express",
                date: "Oct 2014 - Aug 2015",
                technologies: ["JavaScript", "HTML", "CSS", "PHP", "WordPress"],
                details:    "<li>Developed and maintained the company's main website using WordPress.</li>"+
                            "<li>Applied SEO practices to enhance site visibility.</li>"+
                            "<li>Collaborated with backend teams using PHP.</li>"
            },
            {
                title: "Web Developer",
                company: "Fundación CENAMEC",
                date: "Jul 2013 - Sep 2014",
                technologies: ["JavaScript", "HTML", "CSS", "PHP", "Joomla"],
                details:    "<li>Led the development of a teacher education portal.</li>"+
                            "<li>Managed plugins and add-ons for portal functionality.</li>"
            },
            {
                title: "Web Developer",
                company: "Tecnología Venova, C.A.",
                date: "Aug 2010 - Sep 2011",
                technologies: ["JavaScript", "HTML", "CSS", "PHP", "Joomla"],
                details:    "<li>Developed an e-commerce platform using Joomla.</li>"+
                            "<li>Customized plugins using PHP.</li>"
            }
    ])

    const [ skills ] = useState(
        [
            {
                title: "Frontend",
                skills: "React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Sass, Responsive Design, Accessibility."
            },
            {
                title: "Backend & APIs",
                skills: "Node.js, PHP, Laravel, REST API, GraphQL, API Integration."
            },
            {
                title: "Tools & Workflow",
                skills: "Git, GitHub, Bitbucket, GitLab, Jira, Trello, Slack, Figma, Visual Studio Code."
            },
            {
                title: "Platforms & CMS",
                skills: "WordPress, Joomla, VTEX, Linux, Windows."
            },
            {
                title: "Architecture & Practices",
                skills: "Component-based architecture, reusable UI systems, performance optimization, SEO, CI/CD, Agile methodologies."
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
                                                <div className="experience__technologies">
                                                    {
                                                        experience.technologies.map((technology, key) =>
                                                            <span className="experience__technology" key={key}>{technology}</span>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className="line">
                                                <FontAwesomeIcon icon={faMapMarker} />
                                            </div>
                                            <div className="list">
                                                <ul dangerouslySetInnerHTML={{
                                                    __html: experience.details
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

                        <a className="ghost__btn" href="https://drive.google.com/file/d/1qS-pxIdfHfkga_2ad9vJYawojgDhUrSC/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><Button className='ghost__btn' text='Download CV'/></a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills
