import React, { useState } from 'react'
import * as emailjs from "emailjs-com"
import Button from '../Button/Button'
import './Form.css'

const Form = () => {

    const [ data, setData ] = useState({
        name: '',
        // country: '',
        email: '',
        message: ''
    })

    const [ errors, setErrors ] = useState({})

    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const handleChange = (e) => {
        // console.log(e.target.value)
        setData({
            ...data,
            [e.target.name] : e.target.value,
        })
    }

    const validateInfo = (data) => {
        let errors = {}
    
        if(!data.name.trim()) {
            errors.name = "This field is required"
        }
    
        /*if(!data.country) {
            errors.country = "This field is required"
        }*/

        if(!data.email) {
            errors.email = "This field is required"
        } else if(!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Invalid email"
        }

        if(!data.message) {
            errors.message = "This field is required"
        }
        
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!data.name || !data.email || !data.message) {
            setErrors(validateInfo(data))

            // console.log('Error')
            
        } else {
            emailjs.sendForm('gmail', 'template_ad2qa7w', e.target, 'user_JTQJVcOB79rqsNlT6vbWb')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            });

            setErrors(validateInfo(data))

            setIsSubmitting(true)
            
            // console.log(data)

            e.target.reset()

        }
    }

    /*useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            // console.log(data)

            setData(prevState => {
                return {...prevState, name: '', email: '', message: ''}
            })
        }
    }, [errors])*/

    return (
        <div className="contact__form">
            <div className={isSubmitting ? "form hide" : "form active" } >
                <h2>Say hello!</h2>
                <form onSubmit={handleSubmit} noValidate autoComplete="off" >
                    {errors.name && <p className="error__text">{errors.name}</p>}
                    <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
                    {errors.email && <p className="error__text">{errors.email}</p>}
                    <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} />
                    {errors.message && <p className="error__text">{errors.message}</p>}
                    <textarea name="message" rows="6" placeholder="Your message here..." onChange={handleChange} />
                    <Button className={"primary__btn"} type={"submit"} text="Submit" />
                </form>
            </div>
            <div className={isSubmitting ? "confirmation active" : "confirmation"}>
                <div className="confirmation__content">
                    <h2>Great!</h2>
                    <p>Thank you for contacting me, <br/>I will be in touch with you soon.</p>
                    <Button className={"primary__btn"} onClick={() => { setIsSubmitting(!isSubmitting) }} text="Ok" />
                </div>
            </div>
        </div>
    )
}

export default Form