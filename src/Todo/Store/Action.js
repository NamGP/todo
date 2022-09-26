const SET_TODO = "set_todo";
const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const SET_DONE_TODO = "set_done_todo";

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const setDoneTodo = (payload) => ({
  type: SET_DONE_TODO,
  payload,
});

export { SET_TODO, ADD_TODO, DELETE_TODO, SET_DONE_TODO };
