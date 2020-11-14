import React from "react"
import Button from "../Button/Button";
import './Modal.css'
import Portal from "./Portal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, close, render }) => {

    return (
        <Portal>
            <div className="modal-container">
                <div className="modal-box">
                    <div className="modal-content" >
                        <Button className={"close-btn"} onClick={close} text={<FontAwesomeIcon icon={faTimes} />} />
                        {render(children) || children}
                    </div>
                </div>
            </div>
            <div className="modal-background" onClick={close} />
        </Portal>
    );
};

export default Modal