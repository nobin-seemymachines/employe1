import { State } from "../../types/types";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../actions/actions";

const initialState: State = {
  token: localStorage.getItem("token") || "",
  data: {},
  error: "",
};

export default function userReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        token: action.payload.data.data.token,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error:
          action.payload === undefined
            ? "Server not found"
            : action.payload.data.message,
      };
    case SIGNUP_REQUEST:
      return { ...state };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        token: action.payload.data.data.token,
        error: "",
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error:
          action.payload === undefined
            ? "Server not found"
            : action.payload.data.message,
      };
    case LOGOUT:
      return { ...state, data: {}, token: "" };
    default:
      return state;
  }
}
