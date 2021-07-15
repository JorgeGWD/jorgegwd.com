import React from "react"
import Button from "../Button/Button"
import './Modal.css'
import Portal from "./Portal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Modal = ({ children, close, render }) => {

    return (
        <Portal>
            <div className="modal__container">
                <div className="modal__box">
                    <div className="modal__content" >
                        <Button className={"close__btn"} onClick={close} text={<FontAwesomeIcon icon={faTimes} />} />
                        {render(children) || children}
                    </div>
                </div>
            </div>
            <div className="modal__background" onClick={close} />
        </Portal>
    );
};

export default Modal