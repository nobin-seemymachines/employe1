import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeDeletePopup, deleteEmployeeRequest } from "../../redux/actions/actions";
import { props } from "../../types/types";
import "./Employee.css";

function EmployeeDelete({ employeeId, employeeName }: props) {
  const dispatch = useAppDispatch()
  const errors = useAppSelector((state) => state.employee.error)

  return (
    <div className="delete-container">
      <div className="delete-box">
        <h1>Confirm Deletion</h1>
        <p>Are you sure you want to delete employee "{employeeName}"</p>
        <div className="delete-btn">
          <button onClick={() => dispatch(deleteEmployeeRequest({ employeeId: employeeId }))}>Confirm</button>
          <button onClick={() => dispatch(closeDeletePopup())}>Cancel</button>
        </div>
        <p>{errors}</p>
      </div>
    </div>
  );
}

export default EmployeeDelete;
