import { ADD_TASK, DELETE_TASK } from "../actions/types";
const INITIAL_STATE = {
  // list: []
  todo_text: "",
  completed: false,
  key: Date.now()
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TASK:
      return INITIAL_STATE;
    // {
    //   ...state,
    //   list: [
    //     ...state.list,
    //     { todo_text: action.payload, completed: false, key: Date.now() }
    //   ]
    // };

    case DELETE_TASK:
      let taskID = action.payload;
      return INITIAL_STATE;
    // {
    //   ...state,
    //   list: [...state.list].filter(task => task.key !== taskID)
    // };
    default:
      return state;
  }
}
