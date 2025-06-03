import React from 'react'
import Typing from './Typing/Typing'
import Button from '../Common/Button/Button'
import './Home.css'
// import Modal from '../Common/Modal/Modal'
// import useModal from '../Common/Modal/useModal'
// import Form from '../Common/Form/Form'

const Home = () => {

    // const { open, openModal, closeModal } = useModal()

    return (
        <div className="container" id='home'>
            <div className="home__content">
                <div className="home__box">
                    <Typing />
                    <a className="ghost__btn" href="mailto:jorge.rodriguez.r@gmail.com"><Button className={"ghost__btn"} text="Tell me about your project" /></a>
                    {/*
                        open ? (
                            <Modal
                                close={closeModal}
                                render={() => <Form />}
                            />
                        ) : null
                        */}
                </div>
            </div>
        </div>
    )
}

export default Home