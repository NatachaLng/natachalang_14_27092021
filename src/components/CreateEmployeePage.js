import React, { useState } from "react";

import "../styles/CreateEmployee.css"

import Banner from "./Banner";
import CreateEmployeeForm from "./CreateEmployeeForm";

/**
 * Page with the form to create an employee
 * @param handleSubmit - submission of the form
 * @param handleOpenModal - opening of the success modal once employee has been created
 * @return {JSX.Element}
 * @constructor
 */
const CreateEmployeePage = ({ handleSubmit, handleOpenModal }) => {
    const initialState = {
        birth: false,
        start: false,
        state: false,
        department: false,
    };
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const [openedElts, setOpenElts] = useState(initialState);

    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            setOpenElts(initialState);
            setIsOverlayActive(false);
        }
    }
    /**
     * function that open elements depending on the user action
     * @param elt
     */
    const handleElementsOpening = (elt) => {
        if (openedElts[elt]) {
            setIsOverlayActive(false);
        }
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