import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {

    const [ data ] = useState([
        {
            image: require('../../assets/images/portfolio-tigy-web.jpg'),
            title: 'Tigy web',
            description: 'Web app / Social network.',
            tech: 'ReacJS, HTML5, React Router Dom, Sass, Javascript.',
            url: 'https://tigyweb.tigyapp.com/'
        },
        {
            image: require('../../assets/images/portfolio-softars-web.jpg'),
            title: 'SoftArs',
            description: 'Company website.',
            tech: 'ReacJS, HTML5, Sass, Javascript.',
            url: 'http://softars.com/'
        },
        {
            image: require('../../assets/images/portfolio-luvania-web.jpg'),
            title: 'Luvania',
            description: 'Landing page.',
            tech: 'NextJs, ReacJS, HTML5, Sass, Javascript.',
            url: 'https://tratamientos-medicos-co-pmqajvfj2.vercel.app/'
        },
        {
            image: require('../../assets/images/portfolio-laika-app.jpg'),
            title: 'Laika app',
            description: 'Mobile app.',
            tech: 'Reac Native, Flex, React Router Dom, Javascript.',
            url: 'https://laika.com.co/city/bog/dog'
        }
    ])

    return (
        <div className="container">
            <div className="portfolio content">
                <section>
                    <h1>Portfolio</h1>
                    <div className="portfolio-info">
                        {
                            data.map((data, key) =>
                            <div className="porfolio-data box" key={key}>
                                <div className="porfolio-data-img">
                                    <img src={data.image} alt={data.title}/>
                                </div>
                                <div className="porfolio-data-text">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <p className="tech"><span>{data.tech}</span></p>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer"><p>{data.url}</p></a>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio
