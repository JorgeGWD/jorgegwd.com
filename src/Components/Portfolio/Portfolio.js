import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {

    const [ data ] = useState([
        {
            image: require('../../assets/images/portfolio-jorgegwd-web.png'),
            title: 'JorgeGWD',
            description: 'Peersonal web page / Portfolio.',
            tech: 'ReacJS, HTML5, Sass, Javascript.',
            url: 'http://jorgegwd.com/'
        }
    ])

    return (
        <div className="container">
            <div className="portfolio content">
                <section>
                    <h1>Portfolio</h1>
                    <div className="portfolio-info box">
                        {
                            data.map((data, key) =>
                            <div className="porfolio-data" key={key}>
                                <div className="porfolio-data-img">
                                    <img src={data.image} alt={data.title}/>
                                </div>
                                <div className="porfolio-data-text">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <span>{data.tech}</span>
                                    <a href={data.url} target="_blank"><p>http://jorgegwd.com/</p></a>
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
