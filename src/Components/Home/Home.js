import React from 'react';
import Typing from './Typing/Typing';
import Button from '../Common/Button/Button';
import './Home.css';

const Home = () => (
    <div className="home">
        <div className="home-content">
            <Typing />
            <Button />
        </div>
    </div>
)

export default Home;