import {
  TODOS_FETCH_SUCCESS,
  TASK_COMPLETED,
  REQUEST_TASKS,
  IMAGE_UPLOADED
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case REQUEST_TASKS:
      return { ...state, loading: action.loading };
    case TODOS_FETCH_SUCCESS:
      return { ...state, todos: action.payload, loading: action.loading };
    case TASK_COMPLETED:
      return state;
    case IMAGE_UPLOADED:
      return state;
    default:
      return state;
  }
}
