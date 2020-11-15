import React from 'react'
import "./Contact.css"
import Button from '../Common/Button/Button'
import Modal from '../Common/Modal/Modal'
import useModal from '../Common/Modal/useModal'
import Form from '../Common/Form/Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    const { open, openModal, closeModal } = useModal()

    return (
        <div className="container">
            <div className="contact content">
                <div className="contact-box">
                    <section>
                        <h1>Contact</h1>
                        <Button className={"ghost-btn"} onClick={openModal} text="Let's talk" />
                        {
                            open ? (
                                <Modal
                                    close={closeModal}
                                    render={() => <Form />}
                                />
                            ) : null
                        }
                        <div className="contact-data-box">
                            <div className="contact-data">
                                <h3>We can also speak for</h3>
                                <a className="contact-data-info" href="https://twitter.com/JorgeGWD" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /><h5>JorgeGWD</h5></a>
                                <a className="contact-data-info" href="https://ve.linkedin.com/in/jorgegwd" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /><h5>JorgeGWD</h5></a>
                            </div>
                            <div className="contact-data">
                                <h3>Or maybe</h3>
                                <div className="contact-data-info">
                                    <FontAwesomeIcon icon={faMobile} /><h5 className="phone">(+57) 311 2766863</h5>
                                </div>
                                <div className="contact-data-info">
                                    <FontAwesomeIcon icon={faEnvelope} /><h5 className="email">jorge.rodriguez.r@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Contact
