import React from 'react'
import Button from '../Button/Button'
import './Form.css'

const Form = () => {
    return (
        <div className="contact-form">
            <form>
                <input type="text" name="name" placeholder="Company" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" />
                <Button className={"primary-btn"} type={"submit"} text="Submit" />
            </form>
        </div>
    )
}

export default Form
