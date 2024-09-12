import React from 'react';
import NavBar from './components/NavBar';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path='/' element={<EmployeeDetails />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/findEmployee/:id' element={<EditEmployee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
