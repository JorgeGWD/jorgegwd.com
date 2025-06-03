import React, { useState } from 'react'
import ProfilePic from "../../assets/images/profile-pic.jpg"
import BruhspaintedProfilePic from "../../assets/images/bruhspainted-profile-pic.svg"
import './About.css'

const About = () => {

    const [ data ] = useState(
            [
                {
                text:
                "<p>Hi, I'm Jorge Rodríguez, I work as a <span>FrontEnd Developer and Web Designer</span> since 2010. Over the years, I’ve collaborated with various companies, both as a freelancer and within teams.</p>" +
                "<p>I have had to develop some projects from scratch and others already started, as well as redesign some already finished, always looking to <span>implement new tools and technologies</span> that allow me to obtain <span>the best result</span>.</p>" +
                "<p>To make this possible, I also dedicate myself to researching and learning about everything related to <span>new web development technologies</span>. This learning process has been part of my life for quite some time now and I hope it will be for much more.</p>"
            }
        ]
    )

    return (
        <div className="container" id='about'>
            <div className="about content">
                <section>
                    <h1 className="section__title">About</h1>
                    <div className="section__content">
                        <div className="profile__description">
                            {
                                data.map((data, key) => 
                                    <div className="data__text" key={key} dangerouslySetInnerHTML={{
                                        __html: data.text
                                    }}>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile__pic">
                            <img src={ProfilePic} className='image-mask' alt="JorgeGWD" tabIndex="0"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About