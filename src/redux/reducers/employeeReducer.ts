import {
  ADD_EMPLOYEE_PAGE,
  ADD_NEW_EMPLOYEE,
  ADD_NEW_EMPLOYEE_FAILED,
  ADD_NEW_EMPLOYEE_SUCCESS,
  CLOSE_DELETE_POPUP,
  DELETE_EMPLOYEE_FAILED,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_FAILED,
  EDIT_EMPLOYEE_PAGE,
  EDIT_EMPLOYEE_SUCCESS,
  GET_AN_EMPLOYEE,
  GET_AN_EMPLOYEE_FAIL,
  GET_AN_EMPLOYEE_SUCCESS,
  OPEN_DELETE_POPUP,
} from "../actions/actions";
import { SERVER_ERROR } from "../../constants";

const initialState = {
  data: {},
  error: "",
  employeeId: "",
  isAddEmployee: false,
  isEditEmployee: false,
  isDeleteEmployee: false,
};

export default function employeeReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_EMPLOYEE_PAGE:
      return { ...state, employeeId: "", isAddEmployee: true, data: {} };
    case EDIT_EMPLOYEE_PAGE:
      return { ...state, employeeId: action.payload, isEditEmployee: true };
    case ADD_NEW_EMPLOYEE:
      return { ...state, data: {}, error: "", employeeId: "" };
    case ADD_NEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isAddEmployee: false,
        error: "",
        employeeId: "",
        data: {},
      };
    case ADD_NEW_EMPLOYEE_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message || SERVER_ERROR,
        employeeId: "",
      };
    case EDIT_EMPLOYEE:
      return { ...state, error: "" };
    case EDIT_EMPLOYEE_SUCCESS:
      return { ...state, isEditEmployee: false, error: "",data:{},isAddEmployee:false };
    case EDIT_EMPLOYEE_FAILED:
      return { ...state, error: action.payload.response.data || SERVER_ERROR };
    case GET_AN_EMPLOYEE:
      return { ...state, error: "" };
    case GET_AN_EMPLOYEE_SUCCESS:
      return { ...state, data: action.payload.data.data.employee, error: "" };
    case GET_AN_EMPLOYEE_FAIL:
      return { ...state, error: action.payload.response.data || SERVER_ERROR };
    case OPEN_DELETE_POPUP:
      return { ...state, isDeleteEmployee: true, error: "" };
    case CLOSE_DELETE_POPUP:
      return { ...state, isDeleteEmployee: false, error: "" };
    case DELETE_EMPLOYEE_REQUEST:
      return { ...state, employeeId: action.payload };
    case DELETE_EMPLOYEE_SUCCESS:
      return { ...state, isDeleteEmployee: false, error: "" };
    case DELETE_EMPLOYEE_FAILED:
      return {
        ...state,
        error: action.payload.response.data || SERVER_ERROR,
      };
    default:
      return { ...state };
  }
}
