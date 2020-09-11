import React from 'react'
import './Button.css'

const Button = ({ onClick }) => {
    return (
        <button className="ghost-btn" onClick={onClick}>
            <p>Tell me about your project</p>
        </button>
    )
}

export default Button
