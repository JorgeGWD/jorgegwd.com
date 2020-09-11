import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {

    const [ data ] = useState([
        {
            image: 'Image URL',
            title: 'Title',
            description: 'Description'
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
                                <p>{data.image}</p>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
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
