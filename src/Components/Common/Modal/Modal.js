import React from "react"
import './Modal.css'
import Portal from "./Portal"
import useModal from './useModal'

const Modal = ({ children, close, render }) => {

    const { closeModal } = useModal()

    return (
        <Portal>
            <div>
                <div className="modal-container">
                    <div className="modal-content" >
                        {render(children) || children}
                        <hr />
                        <button onClick={close}>Close</button>
                    </div>
                </div>
                <div className="modal-background" close={closeModal}/>
            </div>
        </Portal>
    );
};

export default Modal