export type State = {
  token: string;
  data: object;
  error: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export interface FormData {
  userData: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
  };
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface EmployeeState {
  isLoading: boolean;
  employeeList: Array<object>;
  employeeId: string;
}

export interface pageState {
  isLoginPage: boolean;
}

export interface props {
  employeeId: string;
  employeeName: string;
}

export interface EmployeeTableProps {
  displayEmployeeList: any[];
  DeleteEmployee: (id: props) => void;
}

export interface EmployeeDetails {
  fname: string;
  lname: string;
  email: string;
  dob: string;
  doj: string;
  designation: string;
  experience: string;
  phoneNumber: string;
}
