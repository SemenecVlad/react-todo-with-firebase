import { TODOS_FETCH_SUCCESS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TODOS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
