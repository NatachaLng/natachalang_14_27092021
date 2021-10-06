import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CreateEmployeePage from "./components/CreateEmployeePage";
import CurrentEmployeesPage from "./components/CurrentEmployee";


const App = () => {
  const [employees, setEmployees] = useState([]);

  const createEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CreateEmployeePage
                handleSubmit={createEmployee}
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
