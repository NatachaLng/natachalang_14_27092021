import React, { useState } from "react";

import "../styles/CreateEmployee.css"

import Banner from "./Banner";
import CreateEmployeeForm from "./CreateEmployeeForm";

const CreateEmployeePage = ({ handleSubmit, handleOpenModal }) => {
    const initialState = {
        birth: false,
        start: false,
        state: false,
        department: false,
    };
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const [openedElts, setOpenElts] = useState(initialState);

    const closeAllElements = () => {
        setOpenElts(initialState);
        setIsOverlayActive(false);
    };

    const handleElementsOpening = (elt) => {
        if (openedElts[elt]) setIsOverlayActive(false);
        else setIsOverlayActive(true);
        setOpenElts({
            ...openedElts,
            [elt]: !openedElts[elt],
        });
    };

    return (
        <div className="create-employee">
            {isOverlayActive && (
                <div
                    className="create-employee-overlay"
                    onClick={closeAllElements}
                ></div>
            )}
            <Banner
                pageTitle="Create Employee"
                linkImg="../assets/logo.jpg"
                linkContent="View Current Employees"
                linkSrc="/employee-list"
            />
            <CreateEmployeeForm
                handleSubmit={handleSubmit}
                handleOpenModal={handleOpenModal}
                handleOverlay={setIsOverlayActive}
                openedElts={openedElts}
                handleElementsOpening={handleElementsOpening}
            />
        </div>
    );
};

export default CreateEmployeePage;