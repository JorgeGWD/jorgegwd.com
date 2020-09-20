import React from 'react'
import Typing from './Typing/Typing'
import Button from '../Common/Button/Button'
import './Home.css'
import Modal from '../Common/Modal/Modal'
import useModal from '../Common/Modal/useModal'
import Form from '../Common/Form/Form'

const Home = () => {

    const { open, openModal, closeModal } = useModal()

    return (
        <div className="container">
            <div className="home-content">
                <div className="home-box">
                    <Typing />
                    <Button className={"ghost-btn"} onClick={openModal} text="Tell me about your project" />
                    {
                        open ? (
                            <Modal
                                close={closeModal}
                                render={() => <Form />}
                            />
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Home