import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";
import merge from "lodash/merge";
import RECEIVE_TODO from "../actions/todo_actions";
import RECEIVE_TODOS from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return merge({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
