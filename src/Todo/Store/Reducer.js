import { ADD_TODO, SET_TODO, DELETE_TODO, SET_DONE_TODO } from "./Action";

const initState = {
  todoText: "",
  todos: [{name: 'Quet nha', isDone: true}],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoText: action.payload,
      };
      
    case ADD_TODO:
      return {
        ...state,
        todos: [ action.payload, ...state.todos],
      };

    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };

    case SET_DONE_TODO:
      const temp = [...state.todos]
      temp[action.payload]  ={
        name: temp[action.payload].name,
        isDone: true
      }
   
      return{
        ...state,
        todos: temp
      };

    default:
      throw new Error("Invalid action!");
  }
}

export { initState };
export default reducer;
