import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CreateEmployeePage from "./components/CreateEmployeePage";
import CurrentEmployeesPage from "./components/CurrentEmployee";
import Modal from "./components/Modal";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="app">
        {isModalOpen && (
            <Modal
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
