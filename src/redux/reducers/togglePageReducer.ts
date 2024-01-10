import { pageState } from "../../types/types";
import {
  TOGGLE_LOGIN_PAGE,
  TOGGLE_REGISTER_PAGE,
} from "../actions/actions";

const isLoginPageInitial = window.location.pathname === "/";
const initialState: pageState = {
  isLoginPage: isLoginPageInitial,
};

export default function togglePageReducer(state = initialState, action: any) {
  switch (action.type) {
    case TOGGLE_LOGIN_PAGE:
      return {
        ...state,
        isLoginPage: true,
      };
    case TOGGLE_REGISTER_PAGE:
      return {
        ...state,
        isLoginPage: false,
      };
    default:
      return state;
  }
}
