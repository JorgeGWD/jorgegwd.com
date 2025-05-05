import React from 'react'
import LogoImg from '../../../../assets/images/logo.svg'
import './Logo.css'

const Logo = () => (
    <div className="logo">
        <a href="#home"><img src={LogoImg} alt="JorgeGWD" /></a>
    </div>
)

export default Logo