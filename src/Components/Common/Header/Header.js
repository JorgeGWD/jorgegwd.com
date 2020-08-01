import React from 'react';
import Logo from './Logo';
import Codes from './Codes';
import './Header.css';

const Header = () => (
    <header>

        <div className="main-header">

            <Logo />
            <Codes />

        </div>

    </header>
)

export default Header;