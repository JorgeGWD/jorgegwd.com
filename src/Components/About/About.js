import React, { useState } from 'react'
import ProfilePic from "../../assets/images/profile-pic.jpg"
import './About.css'

const About = () => {

    const [ data ] = useState(
            [
                {
                text:
                "<p>Hi, I'm Jorge Rodríguez, I work as a <span>FrontEnd Developer and Web Designer</span> since 2010, doing my work with different companies with great enthusiasm and in a freelance way.</p>" +
                "<p>I have had to develop some projects from scratch and others already started, as well as redesign some already finished, always looking to <span>implement new tools and technologies</span> that allow me to obtain <span>the best result</span>.</p>" +
                "<p>To make this possible, I also dedicate myself to researching and learning about everything related to <span>new web development technologies</span>. This learning process has been part of my life for quite some time now and I hope it will be for much more.</p>"
            }
        ]
    )

    return (
        <div className="container">
            <div className="about content">
                <section>
                    <h1 className="section-title">About</h1>
                    <div className="section-content">
                        <div className="profile-description">
                            {
                                data.map((data, key) => 
                                    <div className="data-text" key={key} dangerouslySetInnerHTML={{
                                        __html: data.text
                                    }}>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-pic">
                            <img src={ProfilePic} alt="JorgeGWD"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About