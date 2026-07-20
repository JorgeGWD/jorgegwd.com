import React, { useState, useEffect } from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop,
  faBuilding,
  faCalendarAlt,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons'
import Button from '../Common/Button/Button'

const Skills = () => {
  const [experience] = useState([
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      date: '2010 - Present',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'PHP/Laravel',
        'Node.js',
        'Sass',
        'REST APIs',
        'Figma',
      ],
      details:
        '<li>Designed and developed web interfaces for clients across multiple industries, delivering scalable and maintainable solutions.</li>' +
        '<li>Translated UI/UX designs into responsive and functional applications using modern frontend technologies.</li>' +
        '<li>Improved website performance and SEO, increasing visibility and user engagement.</li>' +
        '<li>Built scalable frontend architectures using React and Next.js in recent projects.</li>' +
        '<li><strong>Selected projects:</strong> groupminerosuperior.com · lorussonet.com · realtypropiedades.com.</li>',
    },
    {
      title: 'Frontend Developer',
      company: 'Flixcy',
      date: 'Oct 2025 - May 2026',
      technologies: ['React', 'Next.js', 'TypeScript', 'CSS', 'REST APIs'],
      details:
        '<li>Built frontend features for a multi-role mobility platform using Next.js and TypeScript, designing a modular architecture that supported passenger and driver workflows without duplicating business logic.</li>' +
        '<li>Designed and implemented a reusable Wallet module and integrated it into the user navigation, improving feature discoverability while keeping the implementation maintainable.</li>' +
        '<li>Implemented protected routes and authentication-based UI behavior for profile and wallet sections, ensuring consistent access control across user flows.</li>' +
        '<li>Integrated REST API responses into dynamic UI states, handling empty states, incomplete backend data, fallback views, and role-specific behavior.</li>' +
        '<li>Collaborated with backend engineers to define upcoming trip and pickup-point flows, helping shape a frontend architecture prepared for future product expansion.</li>',
    },
    {
      title: 'Web UI Developer',
      company: 'Globant',
      date: 'Jun 2022 - Jul 2023',
      technologies: ['React', 'Next.js', 'TypeScript', 'CI/CD', 'Sass', 'REST APIs'],
      details:
        '<li>Developed and evolved frontend features for an editorial platform using Next.js, TypeScript, and GraphQL, working on a high-volume content application with demanding performance requirements.</li>' +
        '<li>Designed and implemented reusable components and modular structures to maintain consistency across different areas of the product and support future evolution.</li>' +
        '<li>Improved application performance through lazy-loading strategies and resource optimization, contributing to a better user experience across content-heavy interfaces.</li>' +
        '<li>Contributed to CI/CD delivery workflows, supporting more reliable deployments and reducing friction between development and release processes.</li>' +
        '<li>Actively participated in code reviews and collaborated with other developers to maintain quality standards, technical consistency, and development best practices.</li>',
    },
    {
      title: 'Frontend Developer',
      company: 'Tita Media',
      date: 'Jan 2021 - Jun 2021',
      technologies: ['React', 'VTEX', 'Sass', 'REST APIs'],
      details:
        '<li>Developed reusable React components for VTEX projects, improving consistency and development efficiency across e-commerce implementations.</li>' +
        '<li>Optimized image and asset delivery to reduce page weight and improve loading behavior in client-facing storefronts.</li>' +
        '<li>Customized WordPress websites according to client requirements, combining frontend implementation with platform-level configuration.</li>',
    },
    {
      title: 'Frontend Developer',
      company: 'Laika',
      date: 'Dec 2019 - Mar 2020',
      technologies: ['React Native', 'GraphQL', 'REST APIs'],
      details:
        '<li>Developed a cross-platform frontend component library with React Native for Android and iOS applications, promoting reusability and consistency across different application views.</li>' +
        '<li>Collaborated with design and backend teams to align interface components, product behavior, functional requirements, and API-connected functionality.</li>' +
        '<li>Contributed to the implementation of reusable frontend patterns to improve consistency across different mobile views and user flows.</li>' +
        '<li>Worked with REST and GraphQL integrations to connect UI components with backend data and services.</li>',
    },
    {
      title: 'Web Development Lead',
      company: 'SoftArs',
      date: 'Apr 2018 - Apr 2019',
      technologies: ['React', 'TypeScript', 'Angular', 'Sass', 'GraphQL', 'CI/CD', 'REST APIs'],
      details:
        '<li>Led a development team across frontend and platform-related initiatives, combining technical guidance, planning, code review, and coordination with business requirements.</li>' +
        '<li>Guided developers through planning and implementation, contributing to improved code quality and delivery organization.</li>' +
        '<li>Coordinated with cross-functional teams and stakeholders to align frontend and platform decisions with business objectives.</li>' +
        '<li>Applied Agile practices to organize development workflows, clarify priorities, and improve delivery predictability.</li>' +
        '<li>Continued contributing to frontend development using React, TypeScript, and Angular across different web initiatives.</li>',
    },
    {
      title: 'Frontend Developer',
      company: 'Minami Design',
      date: 'Oct 2017 - Apr 2018',
      technologies: ['JavaScript', 'React', 'HTML', 'CSS', 'WordPress'],
      details:
        "<li>Built the company's primary website using WordPress.</li>" +
        '<li>Translated designs into functional code using HTML, CSS, and JavaScript.</li>' +
        '<li>Created a dashboard for the Aera client using React.</li>',
    },
    {
      title: 'Web Developer',
      company: 'Lear Express',
      date: 'Oct 2014 - Aug 2015',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'WordPress'],
      details:
        "<li>Developed and maintained the company's main website using WordPress.</li>" +
        '<li>Applied SEO practices to enhance site visibility.</li>' +
        '<li>Collaborated with backend teams using PHP.</li>',
    },
    {
      title: 'Web Developer',
      company: 'Fundación CENAMEC',
      date: 'Jul 2013 - Sep 2014',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Joomla'],
      details:
        '<li>Led the development of a teacher education portal.</li>' +
        '<li>Managed plugins and add-ons for portal functionality.</li>',
    },
    {
      title: 'Web Developer',
      company: 'Tecnología Venova, C.A.',
      date: 'Aug 2010 - Sep 2011',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Joomla'],
      details:
        '<li>Developed an e-commerce platform using Joomla.</li>' +
        '<li>Customized plugins using PHP.</li>',
    },
  ])

  const [skills] = useState([
    {
      title: 'Frontend & Frameworks',
      skills: 'React, Next.js, JavaScript, TypeScript, React Native, Angular',
    },
    {
      title: 'Frontend Architecture & Engineering',
      skills:
        'Modular architecture, Reusable components, Scalable frontend design, State management, Protected routes, Role-based access control',
    },
    {
      title: 'APIs & Integration',
      skills:
        'REST APIs, GraphQL, Frontend-backend integration, Authentication, API response mapping and transformation, Loading, error, and incomplete data states',
    },
    {
      title: 'UI, UX & Performance',
      skills:
        'HTML, CSS, Sass, Responsive design, Accessibility, Performance optimization, Resource optimization, Visual consistency',
    },
    {
      title: 'Tools & Platforms',
      skills: 'Git, GitHub, Node.js, CI/CD, Figma, VTEX, WordPress, Joomla',
    },
    {
      title: 'Product Domains',
      skills:
        'E-commerce, Editorial platforms, Mobility, Booking, Dashboards, Multi-role applications',
    },
  ])

  useEffect(() => {
    const items = document.querySelectorAll('.data')

    const handleFocus = (e) => {
      e.target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }

    items.forEach((item) => {
      item.addEventListener('focus', handleFocus)
    })

    return () => {
      items.forEach((item) => {
        item.removeEventListener('focus', handleFocus)
      })
    }
  }, [])

  return (
    <div className="container" id="experience">
      <div className="skills content">
        <div className="skills__box">
          <section>
            <div className="experience__section">
              <h1>Experience</h1>
              <div className="experience">
                {experience.map((experience, key) => (
                  <div className="experience__data" key={key}>
                    <div className="data box" tabIndex="0">
                      <div className="experience__data__info title">
                        <FontAwesomeIcon icon={faDesktop} />
                        <h2>{experience.title}</h2>
                      </div>
                      <div className="experience__data__info place">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>{experience.company}</span>
                      </div>
                      <div className="experience__data__info date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <p>{experience.date}</p>
                      </div>
                      <div className="experience__technologies">
                        {experience.technologies.map((technology, key) => (
                          <span className="experience__technology" key={key}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="line">
                      <FontAwesomeIcon icon={faMapMarker} />
                    </div>
                    <div className="list">
                      <ul
                        dangerouslySetInnerHTML={{
                          __html: experience.details,
                        }}
                      ></ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills__section">
              <h1>Skills</h1>
              <div className="skills__content">
                {skills.map((skills, key) => (
                  <div id={skills.id} className="skills__data" key={key}>
                    <h2>{skills.title}</h2>
                    <p>{skills.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              className="ghost__btn"
              href="https://drive.google.com/file/d/1pvO1xkI7ZKjdKUQ4cM0WPaBtjOMscJ2D/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="ghost__btn" text="Download CV" />
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Skills
