import React from 'react'
import "./Contact.css"
import Button from '../Common/Button/Button'
import Modal from '../Common/Modal/Modal'
import useModal from '../Common/Modal/useModal'

const Contact = () => {

    const { open, openModal, closeModal } = useModal()

    return (
        <div className="container">
            <div className="contact content">
                <div className="contact-box">
                    <section>
                        <h1>Contact</h1>
                        <Button onClick={openModal} text="Let's talk" />
                        {
                            open ? (
                                <Modal
                                    close={closeModal}
                                    render={() => <h1>This is a Modal using Portals!</h1>}
                                />
                            ) : null
                        }
                        <h3>We can also speak for</h3>
                        <ul>
                            <li><a href="https://twitter.com/JorgeGWD" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://ve.linkedin.com/in/jorgegwd" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                        <h3>or maybe</h3>
                        <div className="contact-data">
                            <h4 className="phone">+57 311 2766863</h4>
                            <h4 className="email">hello@jorgegwd.com</h4>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Contact
