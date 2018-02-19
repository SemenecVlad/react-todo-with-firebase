import {
  AUTH_USER,
  AUTH_ERROR,
  AUTH_ERROR_CLEAR,
  UNAUTH_USER,
  AUTH_USER_GOOGLE,
  USER_CREATED
} from "../actions/types";

const INITIAL_STATE = {
  loggedIn: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, loggedIn: true, token: action.payload };
    case UNAUTH_USER:
      return { ...state, loggedIn: false, token: "" };
    case AUTH_USER_GOOGLE:
      return { ...state, loggedIn: true, token: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case AUTH_ERROR_CLEAR:
      return { ...state, error: "" };
    case USER_CREATED:
      return { ...state, loggedIn: true, token: action.payload };
    default:
      return state;
  }
}
