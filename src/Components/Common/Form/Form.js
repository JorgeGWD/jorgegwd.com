import React, { useState } from 'react'
import Button from '../Button/Button'
import './Form.css'

const Form = () => {

    const [data, setData] = useState()

    const handleChange = (e) => {
        // console.log(e.target.value)
        setData({
            ...data,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className="contact-form">
            <h1>Say hello!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter you name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} />
                <textarea name="message" rows="6" placeholder="Your message here..." onChange={handleChange} />
                <Button className={"primary-btn"} type={"submit"} text="Submit" />
            </form>
        </div>
    )
}

export default Form
