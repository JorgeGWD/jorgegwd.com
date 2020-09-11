import React, { useState } from 'react'
import "./Skills.css"

const Skills = () => {

    const [ data ] = useState(
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
    return (
        <div className="container">
            <div className="skills content">
                <div className="skills-box">
                    <section>
                        <div className="experience-section">
                            <h1>Experience</h1>
                            <div className="experience">
                                {
                                    data.map((data, key) =>
                                        <div id={data.id} className="experience-data box" key={key}>
                                            <h2>{data.title}</h2>
                                            <span>{data.company}</span>
                                            <p>{data.date}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="skills-section">
                            <h1>Skills</h1>
                            <h2>Tools</h2>
                            <p>Visual Studio Code, Sublime Text, Git (Github, Bitbucket, Gitlab), Jira, Trello, Slack.</p>
                            <h2>Languajes</h2>
                            <p>Javascript, PHP, HTML/5, CSS/3, Bash.</p>
                            <h2>Frameworks And Libraries</h2>
                            <p>React, Redux, React Native, SASS, LESS, MaterialUI for React, Bootstrap, Materialize CSS, JQuery.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills
