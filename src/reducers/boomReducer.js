import { ADD_TASK, DELETE_TASK } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      return state;

    case DELETE_TASK:
      let taskID = action.payload;
      return state;
    // {
    //   ...state,
    //   list: [...state.list].filter(task => task.key !== taskID)
    // };
    default:
      return state;
  }
}
