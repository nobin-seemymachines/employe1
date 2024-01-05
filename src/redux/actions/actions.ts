import { Credentials } from "../../types/types";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const EMPLOYEE_LIST_REQUEST = "EMPLOYEE_LIST_REQUEST";
export const EMPLOYEE_LIST_SUCCESS = "EMPLOYEE_LIST_SUCCESS";
export const EMPLOYEE_LIST_FAILURE = "EMPLOYEE_LIST_FAILURE";

export const TOGGLE_LOGIN_PAGE = "TOGGLE_LOGIN_PAGE";
export const TOGGLE_REGISTER_PAGE = "TOGGLE_REGISTER_PAGE";

export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const loginRequest = (userData: Credentials) => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

export const loginSuccess = (data: object) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error: object) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const getEmployeeListAction = () => ({
  type: EMPLOYEE_LIST_REQUEST,
});

export const getEmployeeListSuccess = (data: object) => ({
  type: EMPLOYEE_LIST_SUCCESS,
  payload: data,
});

export const getEmployeeListFail = () => ({
  type: EMPLOYEE_LIST_FAILURE,
});

export const signupRequest = (data: Credentials) => ({
  type: SIGNUP_REQUEST,
  payload: data,
});

export const signupSuccess = (data: object) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signupFailure = (error: object) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const toggleLoginPage = () => ({
  type: TOGGLE_LOGIN_PAGE,
});

export const toggleRegisterPage = () => ({
  type: TOGGLE_REGISTER_PAGE,
});

export const addEmployeePage = () => ({
  type: ADD_EMPLOYEE,
});

export const editEmployeePage = (employeeId: string) => ({
  type: EDIT_EMPLOYEE,
  payload: employeeId,
});
