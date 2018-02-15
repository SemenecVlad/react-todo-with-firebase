import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import boomReducer from "./boomReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  todos: boomReducer,
  form: form,
  auth: authReducer
});

export default rootReducer;
