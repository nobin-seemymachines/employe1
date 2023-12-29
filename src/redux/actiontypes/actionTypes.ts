export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


interface ApiCallRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface ApiCallSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: object;
}

interface ApiCallFailureAction {
  type: typeof LOGIN_FAILURE;
  message: any;
}

export type ActionTypes = ApiCallRequestAction | ApiCallSuccessAction | ApiCallFailureAction;
