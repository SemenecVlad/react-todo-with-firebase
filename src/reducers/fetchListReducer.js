import { TODOS_FETCH_SUCCESS, TASK_COMPLETED } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TODOS_FETCH_SUCCESS:
      return action.payload;
    case TASK_COMPLETED:
      return state;
    default:
      return state;
  }
}
