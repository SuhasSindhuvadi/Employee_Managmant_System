import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteEmployee, fetchEmployee } from '../reducers/EmployeeSlice';

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const { content: emp, isLoading, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployee());
    console.log("Employee details component mounted");
  }, []);

  const handleDelete =  (id) => {
    try {
       dispatch(deleteEmployee(id));
      console.log("Employee deleted successfully.");
      dispatch(fetchEmployee());
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  console.log("Employee details component rendered");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h2 style={{ marginTop: "70px" }}>Employee Details</h2>
      {error && <div className="alert alert-danger mb-4">{error.message}</div>}
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
          {emp.length > 0 ? (
            emp.map((employee) => (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.empSal}</td>
                <td>{employee.empGen}</td>
                <td>{employee.empEmail}</td>
                <td>{employee.empPhone}</td>
                <td>{employee.empDept}</td>
                <td>{employee.empAddr}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/findEmployee/${employee.empId}`} className="btn btn-warning btn-sm">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(employee.empId)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
