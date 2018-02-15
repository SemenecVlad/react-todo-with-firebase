import firebase from "firebase";
import {
  ADD_TASK,
  DELETE_TASK,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  AUTH_USER_GOOGLE,
  USER_CREATED
} from "./types";
import { reset } from "redux-form";
import { history } from "../index";

export function registerUser({ email, password }) {
  return function(dispatch) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        localStorage.setItem("token", response.refreshToken),
          dispatch({ type: USER_CREATED, payload: response.refreshToken }),
          history.push("/todo"),
          console.log("User created", response.refreshToken);
      });
  };
}

export function loginUser({ email, password }) {
  return function(dispatch) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        localStorage.setItem("token", response.refreshToken),
          dispatch({ type: AUTH_USER, payload: response.refreshToken }),
          history.push("/todo"),
          console.log(response.refreshToken);
      })
      .catch(err => {
        dispatch(authError(err.message));
        console.log(err.message);
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signInWithGoogle() {
  return async dispatch => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        localStorage.setItem("token", token);
        // The signed-in user info.
        var user = result.user;
        dispatch({ type: AUTH_USER_GOOGLE, payload: token }),
          history.push("/todo"),
          console.log("Google Success", localStorage.getItem("token"));
      })
      .catch(err => {
        dispatch(authError(err.message));
        console.log(err.message);
      });
  };
}

export function logOut() {
  return function(dispatch) {
    firebase
      .auth()
      .signOut()
      .then(
        dispatch({ type: UNAUTH_USER }),
        console.log("Logged Out"),
        localStorage.clear(),
        history.push("/login")
      );
  };
}
export function addTask({ todo_text }) {
  return function(dispatch) {
    dispatch(
      {
        type: ADD_TASK,
        payload: todo_text
      },
      dispatch(reset("todo"))
    );
  };
}

export function deleteTask(key) {
  return {
    type: DELETE_TASK,
    payload: key
  };
}
