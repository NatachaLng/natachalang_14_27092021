import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CreateEmployeePage from "./components/CreateEmployeePage";
import CurrentEmployeesPage from "./components/CurrentEmployee";
import SuccessModal from "./components/Modal";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const createEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleOpenModal = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };

  return (
      <div className="app">
        {isModalActive && (
            <SuccessModal
                modalContent="Employee Created!"
                handleClose={handleCloseModal}
            />
        )}
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CreateEmployeePage
                handleSubmit={createEmployee}
                handleOpenModal={handleOpenModal}
            />
          </Route>
          <Route path="/employee-list">
            <CurrentEmployeesPage employeesList={employees} />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
  );
};

export default App;
