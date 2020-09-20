import React from "react"
import Button from "../Button/Button";
import './Modal.css'
import Portal from "./Portal"

const Modal = ({ children, close, render }) => {

    return (
        <Portal>
            <div>
                <div className="modal-container">
                    <div className="modal-box">
                        <div className="modal-content" >
                            <Button className={"close-btn"} onClick={close} text="Close" />
                            {render(children) || children}
                        </div>
                    </div>
                </div>
                <div className="modal-background" onClick={close} />
            </div>
        </Portal>
    );
};

export default Modal