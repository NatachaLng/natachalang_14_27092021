import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector(props) {
    return (
        <DatePicker
            onSelected={onchange}
            selected={props.selected}
            onChange={props.onChange}
            dateFormat="dd-MM-yyyy"
            name={props.name}
    />
);
};
