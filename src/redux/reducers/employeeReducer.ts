import { EmployeeState } from "../../types/types";
import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  EMPLOYEE_LIST_FAILURE,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
} from "../actions/actions";

const initialState: EmployeeState = {
  isLoading: false,
  employeeList: [],
  employeeId: "",
};

export default function employeeReducer(
  state: EmployeeState = initialState,
  action: any
) {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { ...state, isLoading: true };
    case EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employeeList: action.payload.data.list,
      };
    case EMPLOYEE_LIST_FAILURE:
      return { ...state, isLoading: false };
    case ADD_EMPLOYEE:
      return { ...state, employeeId: "" };
    case EDIT_EMPLOYEE:
      return { ...state, employeeId: action.payload };
    default:
      return state;
  }
}
