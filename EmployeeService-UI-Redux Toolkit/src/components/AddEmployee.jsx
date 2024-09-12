import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../reducers/EmployeeSlice'; // Import the createEmployee action

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
  const dispatch = useDispatch(); // Use the dispatch hook from Redux

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({
      ...emp,
      [name]: value
    });
  };

  // Function to handle form submission
  const addEmployee = (e) => {
    e.preventDefault();
    dispatch(createEmployee(emp))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          setMsg('Employee added successfully!');
          setEmp({
            empName: '',
            empSal: '',
            empGen: '',
            empEmail: '',
            empPhone: '',
            empDept: '',
            empAddr: ''
          }); // Reset form after successful submission
        } else {
          setMsg('Failed to add employee. Please try again.');
        }
      })
      .catch((error) => {
        setMsg('Error: ' + error.message);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-5">
            <div className="card shadow-sm" >
              <div className="card-header bg-primary text-white text-center fs-4">Add Employee</div>

              {msg && <div className="alert alert-info text-center mt-3">{msg}</div>}

              <div className="card-body">
                <form onSubmit={addEmployee}>
                  <div className="mb-3">
                    <label className="form-label">Employee Name</label>
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
                    <label className="form-label">Employee Salary</label>
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
                    <label className="form-label">Employee Gender</label>
                    <div className="d-flex">
                      <div className="form-check me-3">
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
                      <div className="form-check">
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
                    <label className="form-label">Employee Email</label>
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
                    <label className="form-label">Employee Phone Number</label>
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
                    <label className="form-label">Employee Department</label>
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
                    <label className="form-label">Employee Address</label>
                    <textarea
                      name="empAddr"
                      className="form-control"
                      rows="3"
                      onChange={handleChange}
                      value={emp.empAddr}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-success w-100">Submit</button>
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