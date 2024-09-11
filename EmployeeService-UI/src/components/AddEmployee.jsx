import React, { useState } from 'react';
import { createEmployee } from '../service/EmployeeService';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEmployee = () => {
  const [emp, setEmp] = useState({
    empName: '',
    empSal: '',
    empGen: '',
    empEmail: '',
    empPhone: '',
    empDept: '',
    empAddr: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp((prevEmp) => ({ ...prevEmp, [name]: value }));
  };

  const addEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await createEmployee(emp);
      if (response.status === 200) {
        setMsg("Employee added successfully.");
        setEmp({
          empName: '',
          empSal: '',
          empGen: '',
          empEmail: '',
          empPhone: '',
          empDept: '',
          empAddr: ''
        });
      } else {
        setMsg(response.message || "Failed to add employee.");
      }
    } catch (error) {
      setMsg("An error occurred while adding the employee.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-4 text-center">Add Employee</div>
              
              {msg && <div className="alert alert-info text-center mt-3">{msg}</div>}

              <div className="card-body">
                <form onSubmit={addEmployee}>
                  <div className="mb-3">
                    <label className="form-label">Enter Employee Name</label>
                    <input
                      type="text"
                      name="empName"
                      className="form-control"
                      onChange={handleChange}
                      value={emp.empName}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Employee Salary</label>
                    <input
                      type="number"
                      name="empSal"
                      className="form-control"
                      onChange={handleChange}
                      value={emp.empSal}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Select Employee Gender</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          name="empGen"
                          value="Male"
                          checked={emp.empGen === 'Male'}
                          onChange={handleChange}
                          className="form-check-input"
                          required
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          name="empGen"
                          value="Female"
                          checked={emp.empGen === 'Female'}
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Employee Email</label>
                    <input
                      type="email"
                      name="empEmail"
                      className="form-control"
                      onChange={handleChange}
                      value={emp.empEmail}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Employee Phone Number</label>
                    <input
                      type="tel"
                      name="empPhone"
                      className="form-control"
                      onChange={handleChange}
                      value={emp.empPhone}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Employee Department</label>
                    <input
                      type="text"
                      name="empDept"
                      className="form-control"
                      onChange={handleChange}
                      value={emp.empDept}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Employee Address</label>
                    <textarea
                      name="empAddr"
                      className="form-control"
                      rows="3"
                      onChange={handleChange}
                      value={emp.empAddr}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
