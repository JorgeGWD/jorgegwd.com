import React, { useState, useEffect } from 'react'
import './Portfolio.css'

const Portfolio = () => {

    const [ bigCard ] = useState([
        {
            image: require('../../assets/images/portfolio-grupo-minero-superior-web.jpg'),
            title: 'Grupo Minero Superior',
            description: 'Company website.',
            tech: 'ReactJS, HTML5, CSS, Javascript.',
            url: 'https://grupominerosuperior.com/'
        },
        {
            image: require('../../assets/images/portfolio-comfama-magazine.jpg'),
            title: 'Comfama',
            description: 'Online Magazine.',
            tech: 'NextJS, ReactJS, HTML, Sass, Javascript.',
            url: 'https://d3qcwili52gjl2.cloudfront.net/'
        },
        {
            image: require('../../assets/images/portfolio-luvania-web.jpg'),
            title: 'Luvania',
            description: 'Landing page.',
            tech: 'NextJS, ReactJS, HTML, Sass, Javascript.',
            url: 'https://tratamientos-medicos-co-pmqajvfj2.vercel.app/'
        },
        
        {
            image: require('../../assets/images/portfolio-laika-app.jpg'),
            title: 'Laika app',
            description: 'Mobile app.',
            tech: 'React Native, Flex, React Router Dom, Javascript.',
            url: 'https://laika.com.co/city/bog/dog'
        },
        /*{
            image: require('../../assets/images/portfolio-softars-web.jpg'),
            title: 'SoftArs',
            description: 'Company website.',
            tech: 'ReactJS, HTML, Sass, Javascript.',
            url: 'http://softars.io/'
        },*/
        {
            image: require('../../assets/images/portfolio-lorusso-web.jpg'),
            title: 'T.S. Lorusso',
            description: 'Company website.',
            tech: 'HTML, CSS, Javascript.',
            url: 'http://www.lorussonet.com/'
        },
        {
            image: require('../../assets/images/portfolio-equifax-web.jpg'),
            title: 'Equifax Ignite™',
            description: 'Demo page.',
            tech: 'HTML, CSS, Javascript.',
            url: 'https://equifax-demo-zeta.vercel.app/'
        },
        {
            image: require('../../assets/images/portfolio-konvergy-web.jpg'),
            title: 'Konvergy',
            description: 'Demo page.',
            tech: 'Web design, HTML, CSS, Javascript.',
            url: 'https://konvergy-web.vercel.app/'
        }
    ])

    const [ smallCard ] = useState([
        {
            image: require('../../assets/images/portfolio-kiero-web.jpg'),
            title: 'Kiero Marketplace',
            description: 'Online shop.',
            tech: 'ReactJS, HTML, Sass, Javascript.',
            // url: 'https://kiero.co/'
        },
        {
            image: require('../../assets/images/portfolio-tigy-web.jpg'),
            title: 'Tigy web',
            description: 'Web app / Social network.',
            tech: 'ReactJS, HTML, React Router Dom, Sass, Javascript.',
            // url: 'https://tigyweb.tigyapp.com/'
        },
        {
            image: require('../../assets/images/portfolio-hollywood-hel-web.jpg'),
            title: 'Hollywood heladeria',
            description: 'Demo page.',
            tech: 'Web design, WordPress, HTML, CSS, Javascript.'
        },
        {
            image: require('../../assets/images/portfolio-mealtohome-web.jpg'),
            title: 'Delivery',
            description: 'Demo page.',
            tech: 'Web design, HTML, CSS, Javascript.'
        }
    ])

    useEffect(() => {
        const items = document.querySelectorAll('.porfolio__data')

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
        <div className="container" id='portfolio'>
            <div className="portfolio content">
                <section className="portfolio__section">
                    <h1>Portfolio</h1>
                    <div className="portfolio__info big__card">
                        {
                            bigCard.map((data, key) =>
                            <div className="porfolio__data box" key={key} tabIndex="0">
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
                            <div className="porfolio__data box" key={key} tabIndex="0">
                                <img src={data.image} alt={data.title}/>
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
