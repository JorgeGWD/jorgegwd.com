import React, { useState } from 'react'
import Button from '../Button/Button'
import './Form.css'
import { useForm } from 'react-hook-form'

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="contact__form">
            <div className={isSubmitting ? "form hide" : "form active" } >
                <h2>Say hello!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.name?.type === 'required' && <p className="error__text">This field is required</p>}
                    <input type="text" name="name" placeholder="Enter your name" {...register('name', {required: true,})} />
                    {errors.email?.type === 'required' && <p className="error__text">This field is required</p>}
                    <input type="email" name="email" placeholder="Enter your email address" {...register('email', {required: true,})} />
                    {errors.message?.type === 'required' && <p className="error__text">This field is required</p>}
                    <textarea name="message" rows="6" placeholder="Your message here..." {...register('message', {required: true,})} />
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