import React from "react"
import './Modal.css'
import Portal from "./Portal"

const Modal = ({ children, close, render }) => {

    return (
        <Portal>
            <div>
                <div className="modal-container">
                    <button onClick={close}>Close</button>
                    <div className="modal-content" >
                        {render(children) || children}
                    </div>
                </div>
                <div className="modal-background" onClick={close} />
            </div>
        </Portal>
    );
};

export default Modal