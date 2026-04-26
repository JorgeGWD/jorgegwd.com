import React, { useState } from 'react'
import ProfilePic from "../../assets/images/profile-pic.jpg"
import './About.css'

const About = () => {

    const [ data ] = useState(
            [
                {
                text:
                "<p>Hi, I'm Jorge Rodríguez, a <span>Frontend Developer</span> with experience building web interfaces and digital products since 2010.</p>" +
                "<p>I specialize in creating <span>responsive, scalable, and maintainable frontend solutions</span>, working with technologies such as React, Next.js, TypeScript, JavaScript, HTML, CSS, Sass, REST APIs, and modern web development tools.</p>" +
                "<p>Throughout my career, I have worked as a freelancer and as part of multidisciplinary teams, contributing to projects involving <span>frontend architecture, reusable components, performance optimization, accessibility, SEO, and API integrations</span>.</p>" +
                "<p>I’m focused on continuous improvement, clean implementation, and building user-centered interfaces that align technical quality with business goals.</p>"
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
                            <img src={ProfilePic} className='image-mask' alt="Jorge Rodríguez" tabIndex="0"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
