import { State } from "../../types/types";
import {
  ActionTypes,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actiontypes/actionTypes";

const initialState: State = {
  data:{},
  fetching: false,
  error: "",
};

export default function userReducer(
  state: State = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("Loading");
      return { ...state, fetching: true, error: "" };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return { ...state, fetching: false, data: action.payload };
    case LOGIN_FAILURE:
      console.log(action.message);
      return { ...state, fetching: false, error: action.message };
    default:
      return state
  }
}
