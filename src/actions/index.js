import firebase from "firebase";
import {
  ADD_TASK,
  DELETE_TASK,
  AUTH_USER,
  AUTH_ERROR,
  AUTH_ERROR_CLEAR,
  UNAUTH_USER,
  AUTH_USER_GOOGLE,
  USER_CREATED,
  TODOS_FETCH_SUCCESS,
  TASK_COMPLETED
} from "./types";
import { reset } from "redux-form";
import { history } from "../index";

export function registerUser({ email, password }) {
  return function(dispatch) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        localStorage.setItem("uid", response.uid),
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
        localStorage.setItem("uid", response.uid),
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
  return dispatch => {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
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
        this.setState({
          loading: false
        });
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        localStorage.setItem("uid", result.user.uid), console.log(result);
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
  const { currentUser } = firebase.auth();
  return function(dispatch) {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/todos`)
      .push({
        task: todo_text,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        completed: false
      })
      .then(() => {
        dispatch({ type: ADD_TASK });
      }, dispatch(reset("todo")));
  };
}

export function completedTask(key, val) {
  const { currentUser } = firebase.auth();
  return function(dispatch) {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/todos/${key}`)
      // .child("completed")
      .update({ completed: !val }, () => dispatch({ type: TASK_COMPLETED }));
  };
}

export const fetchTasks = () => {
  return function(dispatch) {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${localStorage.getItem("uid")}/todos`)
      .orderByKey()
      .on("value", snapshot => {
        dispatch({
          type: TODOS_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export function deleteTask(key) {
  const { currentUser } = firebase.auth();
  return function(dispatch) {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/todos/${key}`)
      .remove()
      .then(dispatch({ type: DELETE_TASK, payload: key }));
  };
}
