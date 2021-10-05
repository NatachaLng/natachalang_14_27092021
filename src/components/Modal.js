import React from "react";

import '../styles/Modal.css'

const Modal = ({ modalContent, handleClose }) => {
    return (
        <>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className="modal">
                <span className="modal-content">{modalContent}</span>
                <button className="modal-close" type="button" onClick={handleClose}>
                    <img src="../../public/images/close.png" alt="" />
                </button>
            </div>
        </>
    );
};

export default Modal;