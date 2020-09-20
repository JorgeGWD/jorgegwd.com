import React from 'react'
import Button from '../Button/Button'
import './Form.css'

const Form = () => {
    return (
        <div className="contact-form">
            <h1>Say hello!</h1>
            <form>
                <input type="text" name="name" placeholder="Enter you name" />
                <input type="email" name="email" placeholder="Enter your email address" />
                <textarea name="message" rows="6" placeholder="Your message here..." />
                <Button className={"primary-btn"} type={"submit"} text="Submit" />
            </form>
        </div>
    )
}

export default Form
