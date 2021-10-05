import React from "react";
import DatePicker, { changeMonth } from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

export default function DateSelector(props) {
    const years = range(1960, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return (
        <DatePicker
            renderCustomHeader={({
                                     date,
                                     changeYear,
                                     decreaseMonth,
                                     increaseMonth,
                                     prevMonthButtonDisabled,
                                     nextMonthButtonDisabled
                                 }) => (
                <div
                    style={{
                        margin: 10,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                        {'<'}
                    </button>

                    <select
                        value={getYear(date)}
                        onChange={({ target: { value }}) => changeYear(value)}
                    >
                        {years.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value }}) =>
                            changeMonth(months.indexOf(value))}
                    >
                        {months.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                        {'>'}
                    </button>
                </div>
            )}
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