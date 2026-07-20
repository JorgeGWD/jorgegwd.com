import React, { useState } from 'react'
import ProfilePic from '../../assets/images/profile-pic.jpg'
import './About.css'

const About = () => {
  const [data] = useState([
    {
      text:
        "<p>Hi, I'm Jorge Rodríguez, a <span>Frontend Developer</span> with 10+ years of experience building web applications and digital products.</p>" +
        '<p>I specialize in building <span>maintainable, scalable, and user-centered frontend solutions</span> using technologies such as React, Next.js, TypeScript, JavaScript, HTML, CSS, and Sass.</p>' +
        '<p>Throughout my career, I have worked across <span>e-commerce, editorial platforms, mobility, booking, and other digital products</span>, contributing to frontend architecture, reusable components, API integrations, authentication, performance optimization, and responsive interfaces.</p>' +
        '<p>I also have experience working within multidisciplinary teams and contributing to technical and product decisions, from defining solutions to implementation.</p>',
    },
  ])

  return (
    <div className="container" id="about">
      <div className="about content">
        <section>
          <h1 className="section__title">About</h1>
          <div className="section__content">
            <div className="profile__description">
              {data.map((data, key) => (
                <div
                  className="data__text"
                  key={key}
                  dangerouslySetInnerHTML={{
                    __html: data.text,
                  }}
                ></div>
              ))}
            </div>
            <div className="profile__pic">
              <img src={ProfilePic} className="image-mask" alt="Jorge Rodríguez" tabIndex="0" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
