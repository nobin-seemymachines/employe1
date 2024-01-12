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

export const EDIT_EMPLOYEE_PAGE = "EDIT_EMPLOYEE_PAGE";
export const ADD_EMPLOYEE_PAGE = "ADD_EMPLOYEE_PAGE";

export const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE";
export const ADD_NEW_EMPLOYEE_SUCCESS = "ADD_NEW_EMPLOYEE_SUCCESS";
export const ADD_NEW_EMPLOYEE_FAILED = "ADD_NEW_EMPLOYEE_FAILED";

export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const EDIT_EMPLOYEE_SUCCESS = "EDIT_EMPLOYEE_SUCCESS";
export const EDIT_EMPLOYEE_FAILED = "EDIT_EMPLOYEE_FAILED";

export const DELETE_EMPLOYEE_REQUEST = "DELETE_EMPLOYEE_REQUEST";
export const DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAILED = "DELETE_EMPLOYEE_FAILED";

export const OPEN_DELETE_POPUP = "OPEN_DELETE_POPUP";
export const CLOSE_DELETE_POPUP = "CLOSE_DELETE_POPUP";

export const GET_AN_EMPLOYEE = "GET_AN_EMPLOYEE";
export const GET_AN_EMPLOYEE_SUCCESS = "GET_AN_EMPLOYEE_SUCCESS";
export const GET_AN_EMPLOYEE_FAIL = "GET_AN_EMPLOYEE_FAIL";

export const loginRequest = (userData: object) => ({
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

export const signupRequest = (data: object) => ({
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
  type: ADD_EMPLOYEE_PAGE,
});

export const editEmployeePage = (employeeId: string) => ({
  type: EDIT_EMPLOYEE_PAGE,
  payload: employeeId,
});

export const addNewEmployee = (data: object) => ({
  type: ADD_NEW_EMPLOYEE,
  payload: data,
});
export const addNewEmployeeSuccess = (data: object) => ({
  type: ADD_NEW_EMPLOYEE_SUCCESS,
  payload: data,
});
export const addNewEmployeeFailed = (data: object) => ({
  type: ADD_NEW_EMPLOYEE_FAILED,
  payload: data,
});

export const editAnEmployee = (data: object) => ({
  type: EDIT_EMPLOYEE,
  payload: data,
});
export const editAnEmployeeSuccess = (data: object) => ({
  type: EDIT_EMPLOYEE_SUCCESS,
  payload: data,
});
export const editAnEmployeeFailed = (data: object) => ({
  type: EDIT_EMPLOYEE_FAILED,
  payload: data,
});

export const deleteEmployeeRequest = (data: object) => ({
  type: DELETE_EMPLOYEE_REQUEST,
  payload: data,
});

export const deleteEmployeeSuccess = (data: object) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: data,
});

export const deleteEmployeeFailed = (data: object) => ({
  type: DELETE_EMPLOYEE_FAILED,
  payload: data,
});

export const openDeletePopup = () => ({
  type: OPEN_DELETE_POPUP,
});

export const closeDeletePopup = () => ({
  type: CLOSE_DELETE_POPUP,
});

export const getAnEmployee = (data: string) => ({
  type: GET_AN_EMPLOYEE,
  payload: data,
});

export const getAnEmployeeSuccess = (data: object) => ({
  type: GET_AN_EMPLOYEE_SUCCESS,
  payload: data,
});

export const getAnEmployeeFail = (data: object) => ({
  type: GET_AN_EMPLOYEE_FAIL,
  payload: data,
});
