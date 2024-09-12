import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findOneEmployee, updateEmployee } from '../reducers/EmployeeSlice'; // Import the actions

const EditEmployee = () => {
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
  const { id } = useParams(); // Get the employee ID from URL params
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Fetch employee data when component mounts
  useEffect(() => {
    dispatch(findOneEmployee(id))
      .then(response => {
        if (response.meta.requestStatus === 'fulfilled') {
          setEmp(response.payload);
        } else {
          setMsg('Failed to fetch employee data.');
        }
      })
      .catch(error => {
        setMsg('Error: ' + error.message);
      });
  }, [dispatch, id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({
      ...emp,
      [name]: value
    });
  };

  // Handle form submission
  const updateEmp = (e) => {
    e.preventDefault();
    dispatch(updateEmployee({ id, ...emp }))
      .then(response => {
        if (response.meta.requestStatus === 'fulfilled') {
          setMsg('Employee updated successfully!');
          navigate('/'); // Navigate back to home or another page
        } else {
          setMsg('Failed to update employee. Please try again.');
        }
      })
      .catch(error => {
        setMsg('Error: ' + error.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header fs-3 text-center bg-primary text-white">Edit Employee</div>
            {msg && <div className="alert alert-info text-center mt-3">{msg}</div>}
            <div className="card-body">
              <form onSubmit={updateEmp}>
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
                  <div>
                    <label className="form-check-label me-3">
                      <input
                        type="radio"
                        name="empGen"
                        value="Male"
                        checked={emp.empGen === "Male"}
                        onChange={handleChange}
                        className="form-check-input"
                        required
                      />
                      Male
                    </label>
                    <label className="form-check-label">
                      <input
                        type="radio"
                        name="empGen"
                        value="Female"
                        checked={emp.empGen === "Female"}
                        onChange={handleChange}
                        className="form-check-input"
                      />
                      Female
                    </label>
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
                    onChange={handleChange}
                    value={emp.empAddr}
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
