import React from 'react'
import './Button.css'

const Button = ({ text, onClick }) => {
    return (
        <button className="ghost-btn" onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}

export default Button
