import axios from "axios";
import { Credentials } from "../types/types";
import { fetchToken } from "../helpers/fetchToken";

const baseUrl = "http://localhost:8000/api";

export const signUp = (data: Credentials) => {
  return axios.post(`${baseUrl}/users/signup`, data);
};

export const signIn = (userData: Credentials) => {
  return axios.post(`${baseUrl}/users/login`, userData);
};

export const addEmployee = (data: object) => {
  const token = fetchToken();
  const headers = {
    Authorization: token,
  };
  return axios
    .post(`${baseUrl}/employee/register`, data, { headers })
    .then((reponse) => {
      return reponse;
    });
};

export const editEmployee = (data: object) => {
  const token = fetchToken();
  const headers = {
    Authorization: token,
  };
  return axios
    .put(`${baseUrl}/employee/edit`, data, { headers })
    .then((response) => {
      return response;
    });
};

export const getEmployeeList = () => {
  const token = fetchToken();
  const headers = {
    Authorization: token,
  };
  return axios.get(`${baseUrl}/employee/list`, { headers }).then((response) => {
    return response.data;
  });
};

export const getEmployee = (empId: string) => {
  const token = fetchToken();
  const headers = {
    Authorization: token,
  };
  return axios
    .get(`${baseUrl}/employee/getEmployeeById?employeeId=${empId}`, { headers })
    .then((response) => {
      return response;
    });
};

export const deleteEmployee = (data: object) => {
  const token = fetchToken();
  const headers = {
    Authorization: token,
  };
  return axios
    .delete(`${baseUrl}/employee/delete`, { headers, data })
    .then((response) => {
      return response;
    });
};
