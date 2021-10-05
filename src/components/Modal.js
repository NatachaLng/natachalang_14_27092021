import React, { useState } from 'react';
import { Modal } from 'modal-for-react';

export default function SuccessModal() {
    const [isModalActive, setModalActive] = useState(false);
    const handleClickModal = () => isModalActive ? setModalActive(false) : setModalActive(true);

    return (
        <div>
            <Modal
                handleClick={handleClickModal}
                isActive={isModalActive}
                backgroundStyle={{ backgroundColor:"rgba(255,255,255,1)" }}
                contentStyle={{ color: "black" }}
                refresh={true}
            />
        </div>
    )
};