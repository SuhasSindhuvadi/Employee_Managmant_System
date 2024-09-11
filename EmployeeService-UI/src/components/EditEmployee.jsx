import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findEmployeeById, updateEmployee } from '../service/EmployeeService';

const EditEmployee = () => {
  const [emp, setEmp] = useState({
    empName: "",
    empSal: "",
    empGen: "",
    empEmail: "",
    empPhone: "",
    empDept: "",
    empAddr: ""
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Extract id from URL

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await findEmployeeById(id);
        if (res.status === 200) {
          setEmp(res.data);
        } else {
          console.error("Employee not found");
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateEmp = async (e) => {
    e.preventDefault();
    try {
      const res = await updateEmployee(emp);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header fs-3 text-center bg-primary text-white">Edit Employee</div>
            <div className="card-body">
              <form onSubmit={updateEmp}>
                <div className="mb-3">
                  <label className="form-label">Enter Employee Name</label>
                  <input
                    type="text"
                    name="empName"
                    className="form-control"
                    onChange={handleChange}
                    value={emp.empName}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Employee Salary</label>
                  <input
                    type="text"
                    name="empSal"
                    className="form-control"
                    onChange={handleChange}
                    value={emp.empSal}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Employee Gender</label>
                  <div>
                    <label className="form-check-label me-3">
                      <input
                        type="radio"
                        name="empGen"
                        value="Male"
                        checked={emp.empGen === "Male"}
                        onChange={handleChange}
                        className="form-check-input"
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
                  <label className="form-label">Enter Employee Email</label>
                  <input
                    type="email"
                    name="empEmail"
                    className="form-control"
                    onChange={handleChange}
                    value={emp.empEmail}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Employee Phone Number</label>
                  <input
                    type="text"
                    name="empPhone"
                    className="form-control"
                    onChange={handleChange}
                    value={emp.empPhone}
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
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Employee Address</label>
                  <textarea
                    name="empAddr"
                    className="form-control"
                    onChange={handleChange}
                    value={emp.empAddr}
                    rows="4"
                  />
                </div>
                <button type="submit" className="btn btn-primary col-md-12">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default EditEmployee;
