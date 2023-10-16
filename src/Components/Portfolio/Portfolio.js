import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {

    const [ bigCard ] = useState([
        {
            image: require('../../assets/images/portfolio-luvania-web.jpg'),
            title: 'Luvania',
            description: 'Landing page.',
            tech: 'NextJs, ReactJS, HTML5, Sass, Javascript.',
            url: 'https://tratamientos-medicos-co-pmqajvfj2.vercel.app/'
        },
        {
            image: require('../../assets/images/portfolio-kiero-web.jpg'),
            title: 'Kiero Marketplace',
            description: 'Online shop.',
            tech: 'ReactJS, HTML5, Sass, Javascript.',
            url: 'https://kiero.co/'
        },
        {
            image: require('../../assets/images/portfolio-laika-app.jpg'),
            title: 'Laika app',
            description: 'Mobile app.',
            tech: 'React Native, Flex, React Router Dom, Javascript.',
            url: 'https://laika.com.co/city/bog/dog'
        },
        {
            image: require('../../assets/images/portfolio-tigy-web.jpg'),
            title: 'Tigy web',
            description: 'Web app / Social network.',
            tech: 'ReactJS, HTML5, React Router Dom, Sass, Javascript.',
            url: 'https://tigyweb.tigyapp.com/'
        },
        {
            image: require('../../assets/images/portfolio-softars-web.jpg'),
            title: 'SoftArs',
            description: 'Company website.',
            tech: 'ReactJS, HTML5, Sass, Javascript.',
            url: 'http://softars.io/'
        },
        {
            image: require('../../assets/images/portfolio-lorusso-web.jpg'),
            title: 'T.S. Lorusso',
            description: 'Company website.',
            tech: 'HTML5, Css3, Javascript.',
            url: 'http://www.lorussonet.com/'
        }
    ])

    const [ smallCard ] = useState([
        {
            image: require('../../assets/images/portfolio-equifax-web.jpg'),
            title: 'Equifax Ignite™',
            description: 'Demo page.',
            tech: 'HTML5, Css3, Javascript.'
        },
        {
            image: require('../../assets/images/portfolio-konvergy-web.jpg'),
            title: 'Konvergy',
            description: 'Demo page.',
            tech: 'Web design, HTML5, Css3, Javascript.'
        },
        {
            image: require('../../assets/images/portfolio-hollywood-hel-web.jpg'),
            title: 'Hollywood heladeria',
            description: 'Demo page.',
            tech: 'Web design, WordPress, HTML5, Css3, Javascript.'
        },
        {
            image: require('../../assets/images/portfolio-mealtohome-web.jpg'),
            title: 'Delivery',
            description: 'Demo page.',
            tech: 'Web design, HTML5, Css3, Javascript.'
        }
    ])

    return (
        <div className="container">
            <div className="portfolio content">
                <section className="portfolio__section">
                    <h1>Portfolio</h1>
                    <div className="portfolio__info big__card">
                        {
                            bigCard.map((data, key) =>
                            <div className="porfolio__data box" key={key}>
                                <img src={data.image} alt={data.title}/>
                                <div className="porfolio__data__text">
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                    <p className="tech"><span>{data.tech}</span></p>
                                    {data.url ? <a href={data.url} target="_blank" rel="noopener noreferrer"><p>View web</p></a> : ''}
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="portfolio__info small__card">
                        {
                            smallCard.map((data, key) =>
                            <div className="porfolio__data box" key={key}>
                                <div className="porfolio__data__img">
                                    <img src={data.image} alt={data.title}/>
                                </div>
                                <div className="porfolio__data__text">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <p className="tech"><span>{data.tech}</span></p>
                                    {data.url ? <a href={data.url} target="_blank" rel="noopener noreferrer"><p>View web</p></a> : ''}
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
