import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { addEmployeePage, getEmployeeListAction, logout, openDeletePopup } from "../redux/actions/actions";
import EmployeeList from "./Employee/EmployeList";
import EmployeeDelete from "./Employee/DeleteEmployee";
import { props } from "../types/types";

function Dashboard() {
  const state: RootState = useAppSelector((state: RootState) => state)
  const employeeState = state.Listemployee;
  const isDeleteOpen = state.employee.isDeleteEmployee

  const [employeeList, setEmployeeList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [displayEmployeeList, setDisplayEmployeeList] = useState<any[]>([]);
  const [id, setId] = useState({
    employeeId: "",
    employeeName: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeeListAction());
  }, [dispatch, isDeleteOpen]);

  useEffect(() => {
    setEmployeeList(employeeState.employeeList);
  }, [employeeState]);

  useEffect(() => {
    setDisplayEmployeeList(employeeList);
  }, [employeeList]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredEmployeeList =
      searchInput.trim() === ""
        ? employeeList
        : employeeList.filter((employee) => {
          const fullName =
            `${employee.fname} ${employee.lname}`.toLowerCase();
          const email = employee.email.toLowerCase();
          const designation = employee.designation.toLowerCase();

          return (
            fullName.includes(searchInput.toLowerCase()) ||
            email.includes(searchInput.toLowerCase()) ||
            designation.includes(searchInput.toLowerCase())
          );
        });
    setDisplayEmployeeList(filteredEmployeeList);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  const DeleteEmployee = (id: props) => {
    setId(id);
    dispatch(openDeletePopup())
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <h2>Employee Dashboard</h2>
        <Link
          to="/employee"
          onClick={() => {
            dispatch(addEmployeePage()
            )
          }}
        >
          <button>Add Employee</button>
        </Link>
        <button onClick={logOut}>Logout</button>
      </div>
      <div className="header">
        <h1>Welcome to Employee Dashboard</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for employee name, email, or designation"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {employeeState.isLoading ? (
        <p>Loading...</p>
      ) : (
        <EmployeeList
          displayEmployeeList={displayEmployeeList}
          DeleteEmployee={DeleteEmployee}
        />
      )}
      {isDeleteOpen && (
        <EmployeeDelete
          employeeId={id.employeeId}
          employeeName={id.employeeName}
        />
      )}
    </div>
  );
}

export default Dashboard;
