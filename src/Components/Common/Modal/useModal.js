import { useState } from "react"

const useModal = () => {

    const [open, onOpenModal] = useState(false)
    const [close, onCloseModal] = useState(false)

    const openModal = () => {
        onOpenModal(true);
        document.body.style.overflow = 'hidden'
    };

    const closeModal = () => {
        onCloseModal(true);
        onOpenModal(false);
        document.body.style.overflow = 'unset'
    };

    return { open, close, openModal, closeModal };
};

export default useModal