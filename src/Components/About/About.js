import React from 'react'
import ProfilePic from "../../assets/images/profile-pic.jpg"
import './About.css'

const About = () => (
    <div className="container">
        <div className="about content">
            <section>
                <h1 className="section-title">About</h1>
                <div className="section-content">
                    <div className="profile-description">
                        <p>Hi I'm <span>Jorge Rodríguez</span>, I have seven years working as a <span>FrontEnd Developer</span> and <span>Web Designer</span>, exercising with great enthusiasm my work with different companies and in a freelance manner.</p>
                        <p>I have had to develop some projects from scratch and others already started, as well as redesign some already finished, always looking to <span>implement new tools and technologies</span> that allow me to obtain <span>the best result</span>.</p>
                        <p>To make this possible, I also dedicate myself to researching and learning about everything related to <span>new web development technologies</span>. This learning process has been part of my life for quite some time now and I hope it will be for much more.</p>
                    </div>
                    <div className="profile-pic">
                        <img src={ProfilePic} alt="JorgeGWD"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
)

export default About