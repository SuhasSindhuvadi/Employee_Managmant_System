import React, { useState, useEffect } from 'react';
import { deleteEmpByid, getAllEmployees } from '../service/EmployeeService';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeDetails = () => {
  const [emp, setEmp] = useState([]);
  const [msg, setMessage] = useState("");

  const getEmployee = async () => {
    try {
      const response = await getAllEmployees();
      if (response.status === 200) {
        setEmp(response.data);
        setMessage(response.message);
      } else {
        setMessage("No employee data found.");
      }
    } catch (error) {
      setMessage("Error fetching data");
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteEmpByid(id);
      if (response.status === 200) {
        setMessage(response.message);
        getEmployee();
      }
    } catch (error) {
      setMessage("Error deleting employee");
      console.error("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div className="details-container">
      <h2>Employee Service</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emp && emp.length > 0 ? (
            emp.map((emp) => (
              <tr key={emp.empId}>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empSal}</td>
                <td>{emp.empGen}</td>
                <td>{emp.empEmail}</td>
                <td>{emp.empPhone}</td>
                <td>{emp.empDept}</td>
                <td>{emp.empAddr}</td>
                <td>
                  <div className="button-group">
                    {/* Link to the correct route with the employee ID */}
                    <Link to={`/editEmployee/${emp.empId}`} className="btn edit-button btn-sm">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(emp.empId)} className="btn delete-button btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default EmployeeDetails;
