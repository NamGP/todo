import { StoreContext, action } from "./Store";
import { useContext, useRef } from "react";
import "./style.css";

function Todo() {
  const [state, dispatch] = useContext(StoreContext);
  const { todoText, todos } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    if (todoText.trim().length === 0) {
      alert("Please enter somethings");
      return;
    }
    dispatch(action.addTodo({name:todoText, isDone:false}));
    dispatch(action.setTodo(""));
    inputRef.current.focus();
  };

  const handelDelete = (index) => {
    console.log(index);
    dispatch(action.deleteTodo(index));
  };

  const handleSetDone = (index) => {
    console.log(index);
    dispatch(action.setDoneTodo(index));
  };
  
  console.log(todos);

  return (
    <div>
      <div className="head">
        <input
          ref={inputRef}
          value={todoText}
          onChange={(e) => {
            dispatch(action.setTodo(e.target.value));
          }}
          placeholder="Input somethings..."
        />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="list">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="item">
              <div className={`item-content ${todo.isDone ? 'is-done':''}`}>{todo.name}</div>
              <div className="action">
                <span className="delete" onClick={() => handelDelete(index)}>
                  Delete
                </span>
                <span
                  className="done"
                  onClick={() => {
                    handleSetDone(index);
                  }}
                >
                  Done
                </span>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
