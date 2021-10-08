import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

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

DateSelector.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string
}