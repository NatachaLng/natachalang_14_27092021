import React, { useState } from "react";

import { statesUSA, departments } from "../assets/data";

import Dropdown from "./Dropdown";

const CreateEmployeeForm = ({
                                handleSubmit,
                                handleOpenModal,
                                openedElts,
                                handleElementsOpening,
                            }) => {
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
        handleOpenModal();
    };

    const handleCustomInputChange = (name, value) => {
        setInput({
            ...input,
            [name]: value,
        });
    };

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
        </form>
    );
};

export default CreateEmployeeForm;