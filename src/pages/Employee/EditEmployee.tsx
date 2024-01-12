import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addNewEmployee, editAnEmployee, getAnEmployee } from "../../redux/actions/actions";
import { validateEmployeeDetails } from "./formValidation";
import { dateConvert } from "../../services/dateConvert";

function EditEmployee() {

  const state = useAppSelector((state) => state.employee)
  const { employeeId, isAddEmployee, isEditEmployee, data, error } = state

  useEffect(() => {
    if (!isAddEmployee && !isEditEmployee) {
      navigate('/dashboard')
    }
  }, [isAddEmployee, isEditEmployee])

  //employee details
  const [empDetails, setEmpDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    doj: "",
    designation: "",
    experience: "",
    phoneNumber: "",
  });

  // employee details input field error
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    doj: "",
    designation: "",
    experience: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmpDetails({ ...empDetails, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  useEffect(() => {
    const FetchData = async () => {
      if (employeeId) {
        try {
          dispatch(getAnEmployee(employeeId))
        } catch (error) {
          console.log("Error fetching employee list:", error);
        }
      }
    };
    FetchData();
  }, [employeeId]);

  useEffect(() => {
    setEmpDetails((prevDetails) => ({
      ...prevDetails,
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      dob: dateConvert(data.dob),
      doj: dateConvert(data.doj),
      designation: data.designation,
      experience: data.experience,
      phoneNumber: data.phoneNumber,
    }));
  }, [data]);

  //Submit Add or Edit Employee
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEmployeeDetails(empDetails);
    setErrors(validationErrors);
    if (Object.values(validationErrors).every((error) => !error)) {
      employeeId ? dispatch(editAnEmployee({ employeeId: employeeId, ...empDetails })) : dispatch(addNewEmployee(empDetails));
    }
  };

  return (
    <div className="emp">
      <div className="employee-detail">
        <div className="employe-header">
          <h1>{employeeId ? "Edit Employee" : "Add Employee"}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs-grouped">
            <div className="input-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                onChange={handleChange}
                value={empDetails.fname}
              />
              <span className="material-symbols-outlined close-btn">
                cancel
              </span>
              <p className="error-message">{errors.fname}</p>
            </div>
            <div className="input-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                onChange={handleChange}
                value={empDetails.lname}
              />
              <span className="material-symbols-outlined close-btn">
                cancel
              </span>
              <p className="error-message">{errors.lname}</p>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={empDetails.email}
              />
              <span className="material-symbols-outlined close-btn">
                cancel
              </span>
              <p className="error-message">{errors.email}</p>
            </div>
            <div className="input-grid-group">
              <div className="input-group">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  value={empDetails.dob}
                />
                <p className="error-message">{errors.dob}</p>
              </div>
              <div className="input-group">
                <label htmlFor="doj">Date Of Join</label>
                <input
                  type="date"
                  name="doj"
                  onChange={handleChange}
                  value={empDetails.doj}
                />
                <p className="error-message">{errors.doj}</p>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                name="designation"
                onChange={handleChange}
                value={empDetails.designation}
              />
              <span className="material-symbols-outlined close-btn">
                cancel
              </span>
              <p className="error-message">{errors.designation}</p>
            </div>
            <div className="input-grid-group">
              <div className="input-group">
                <label htmlFor="experience">Experience (in yrs)</label>
                <input
                  type="text"
                  name="experience"
                  onChange={handleChange}
                  value={empDetails.experience}
                />
                <span className="material-symbols-outlined close-btn">
                  cancel
                </span>
                <p className="error-message">{errors.experience}</p>
              </div>
              <div className="input-group last-span">
                <label htmlFor="phoneNumber">Phone</label>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={empDetails.phoneNumber}
                />
                <span className="material-symbols-outlined close-btn">
                  cancel
                </span>
                <p className="error-message">{errors.phoneNumber}</p>
              </div>
            </div>
            <div className="btn-group">
              <button type="submit">
                {employeeId ? "Edit" : "Add Employee"}
              </button>
              <Link to="/dashboard">
                <button>Cancel</button>
              </Link>
            </div>
            <p>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
