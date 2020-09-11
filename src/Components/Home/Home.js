import React from 'react'
import Typing from './Typing/Typing'
import Button from '../Common/Button/Button'
import './Home.css'

const Home = () => (
    <div className="container">
        <div className="home-content">
            <div className="home-box">
                <Typing />
                <Button />
            </div>
        </div>
    </div>
)

export default Home