import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import boomReducer from "./boomReducer";
import authReducer from "./authReducer";
import fetchListReducer from "./fetchListReducer";

const rootReducer = combineReducers({
  todos: boomReducer,
  list: fetchListReducer,
  form: form,
  auth: authReducer
});

export default rootReducer;
