import React from "react";
import DataTables from "datatables-plugin-react";

import { labels } from "../assets/data";

import Banner from "./Banner";

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
                linkImg="../../public/images/logo.jpg"
                linkContent="Home"
                linkSrc="/"
            />
            <DataTables labels={labels} data={employeesData} />
        </div>
    );
};

export default CurrentEmployeesPage;