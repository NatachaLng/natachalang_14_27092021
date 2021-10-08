import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { statesUSA, departments } from "../assets/data";

import Dropdown from "dropdown-react-natacha";
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
    /*const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        birth: "1990-03-01",
        start: "1990-01-01",
        street: "",
        city: "",
        state: statesUSA[0],
        zipCode: "",
        department: departments[0],
    });*/

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birth, setDoB] = useState(new Date("1990-01-01"));
    const [start, setStart] = useState(new Date("1990-01-01"));
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setUSAState] = useState(statesUSA[0]);
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState(departments[0]);




    /*const handleInputChange = (evt) => {
        setInput({
            ...input,
            [evt.target.name]: evt.target.value,
        });
    };*/

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        handleSubmit({
            firstname,
            lastname,
            birth:convertDate(birth),
            start:convertDate(start),
            street,
            city,
            state,
            zipCode,
            department
        });
        onOpenModal();
    };

    const convertDate = (date)=>{
        const month = date.getUTCMonth()+1;
        const day = date.getUTCDate()+1;
        const year = date.getUTCFullYear();
        return `${year}-${month}-${day}`
    }

    const update= (event, setter)=>{
        setter(event.target.value)
    }

    /*const handleCustomInputChange = (name, value) => {
        setInput({
            ...input,
            [name]: value,
        });
    };*/

    const handleDateChange = (date, setter) => {
        const month = date.getUTCMonth();
        const day = date.getUTCDate()+1;
        const year = date.getUTCFullYear();
        const formattedDate = new Date(year, month, day);
        //displayState(formattedDate);
        //const dateString = formattedDate.toLocaleString();
        //const dateArray = dateString.split(",");
        //state(dateArray[0].replaceAll("/", "-"));
        //if (target === "birthDate") return setDob(formattedDate);
        //setStartDate(formattedDate)
        setter(formattedDate);
    }

    return (
        <form className="create-employee-form" onSubmit={handleSubmitForm}>
            <label>
                First Name
                <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={(evt)=>update(evt, setFirstname)}
                />
            </label>
            <label>
                Last Name
                <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(evt)=>update(evt, setLastname)}
                />
            </label>
            <label htmlFor="date-of-birth">Date of Birth</label>
            <DateSelector name="date-of-birth" onChange={(date) => handleDateChange(date, setDoB)} selected={birth}/>
            <label htmlFor="start-date">Start Date</label>
            <DateSelector name="start-date" onChange={(date) => handleDateChange(date, setStart)} selected={start} />
            <fieldset>
                <legend>Address</legend>
                <label>
                    Street
                    <input
                        type="text"
                        name="street"
                        value={street}
                        onChange={(evt)=>update(evt, setStreet)}
                    />
                </label>
                <label>
                    City
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(evt)=>update(evt, setCity)}
                    />
                </label>

                <Dropdown
                    selectValue={state}
                    handleSelectChange={setUSAState}
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
                        value={zipCode}
                        onChange={(evt)=>update(evt, setZipCode)}
                    />
                </label>
            </fieldset>

            <Dropdown
                selectValue={department}
                handleSelectChange={setDepartment}
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