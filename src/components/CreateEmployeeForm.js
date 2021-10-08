import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { statesUSA, departments } from "../assets/data";

import Dropdown from "dropdown-react";
import DateSelector from "./DateSelector";


const CreateEmployeeForm = ({
                                handleSubmit,
                                openedElts,
                                handleElementsOpening,
                            }) => {

    const [initialDob, setInitialDob] = useState(null);
    const [initialStartDate, setInitialStartDate] = useState(null);
    const [setDob] = useState('');
    const [setStartDate] = useState('');
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        birth: "1990-01-01",
        street: "",
        city: "",
        state: statesUSA[0],
        zipCode: "",
        department: departments[0],
    });

    const handleInputChange = (evt) => {
        setInput({
            ...input,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        handleSubmit(input);
        onOpenModal();
    };

    const handleCustomInputChange = (name, value) => {
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleDateChange = (date, displayState) => {
        const month = date.getUTCMonth();
        const day = date.getUTCDate()+1;
        const year = date.getUTCFullYear();
        const formattedDate = new Date(year, month, day);
        displayState(formattedDate);
        //const dateString = date.toLocaleString();
        //const dateArray = dateString.split(",");
        //state(dateArray[0].replaceAll("/", "-"));
    }

    return (
        <form className="create-employee-form" onSubmit={handleSubmitForm}>
            <label>
                First Name
                <input
                    type="text"
                    name="firstname"
                    value={input.firstname}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Last Name
                <input
                    type="text"
                    name="lastname"
                    value={input.lastname}
                    onChange={handleInputChange}
                />
            </label>
            <label htmlFor="date-of-birth">Date of Birth</label>
            <DateSelector name="date-of-birth" onChange={(date) => handleDateChange(date, setInitialDob)} selected={initialDob}/>
            <label htmlFor="start-date">Start Date</label>
            <DateSelector name="start-date" onChange={(date) => handleDateChange(date, setInitialStartDate)} selected={initialStartDate} />
            <fieldset>
                <legend>Address</legend>
                <label>
                    Street
                    <input
                        type="text"
                        name="street"
                        value={input.street}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    City
                    <input
                        type="text"
                        name="city"
                        value={input.city}
                        onChange={handleInputChange}
                    />
                </label>

                <Dropdown
                    selectValue={input.state}
                    handleSelectChange={handleCustomInputChange}
                    selectLabel="State"
                    selectList={statesUSA}
                    selectName="state"
                    isOpen={openedElts.state}
                    handleOpen={handleElementsOpening}
                />

                <label>
                    Zip Code
                    <input
                        type="number"
                        name="zipCode"
                        value={input.zipCode}
                        onChange={handleInputChange}
                    />
                </label>
            </fieldset>

            <Dropdown
                selectValue={input.department}
                handleSelectChange={handleCustomInputChange}
                selectLabel="Department"
                selectList={departments}
                selectName="department"
                isOpen={openedElts.department}
                handleOpen={handleElementsOpening}
            />

            <button type="submit" className="create-employee-form-btn">
                Save
            </button>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Employee successfully created !</h2>
            </Modal>
        </form>
    );
};

export default CreateEmployeeForm;