import React from 'react'
import './Button.css'

const Button = ({ className, text, type, onClick, href, target, rel }) => {
    if (href) {
        return (
            <a
                className={className}
                href={href}
                target={target}
                rel={rel}
            >
                <p>{text}</p>
            </a>
        )
    }

    return (
        <button className={className} type={type} onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}

export default Button
