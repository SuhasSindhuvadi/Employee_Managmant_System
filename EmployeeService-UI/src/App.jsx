import React from 'react';
import EmployeeDetails from './components/EmployeeDetils'; // Correct component name
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<EmployeeDetails />} />
        <Route path='/addEmployee' element={<AddEmployee />} />
        {/* Ensure the path includes :id to match dynamic segments */}
        <Route path='/editEmployee/:id' element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
