import React from 'react'
import Typing from './Typing/Typing'
import Button from '../Common/Button/Button'
import './Home.css'
import Modal from '../Common/Modal/Modal'
import useModal from '../Common/Modal/useModal'

const Home = () => {

    const { open, openModal, closeModal } = useModal()

    return (
        <div className="container">
            <div className="home-content">
                <div className="home-box">
                    <Typing />
                    <Button onClick={openModal} text="Tell me about your project" />
                    {
                        open ? (
                            <Modal
                                close={closeModal}
                                render={() => <h1>This is a Modal using Portals!</h1>}
                            />
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Home