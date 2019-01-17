import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";
import { receiveTodo, receiveTodos } from "../actions/todo_actions";
import merge from "lodash/merge";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  let defaultState = {};

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        defaultState[todo.id] = todo;
      });
      return defaultState;
    case RECEIVE_TODO:
      state[action.todo.id] = action.todo;
      return state;
    default:
      return state;
  }
};

export default todosReducer;
