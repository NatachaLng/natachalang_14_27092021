import React from "react";
import DataTables from "datatables-plugin-react";

import { labels } from "../assets/data";

import Banner from "./Banner";
import '../styles/Datatables.css';

const CurrentEmployeesPage = ({ employeesList }) => {
    const employeesData = employeesList.map((elt) => ({
        ...elt,
        department: elt.department.text,
        state: elt.state.value,
    }));

    return (
        <div className="current-employees">
            <Banner
                pageTitle="Current Employees"
                linkImg="../assets/logo.jpg"
                linkContent="Home"
                linkSrc="/"
            />
            <DataTables labels={labels} data={employeesData} />
        </div>
    );
};

export default CurrentEmployeesPage;