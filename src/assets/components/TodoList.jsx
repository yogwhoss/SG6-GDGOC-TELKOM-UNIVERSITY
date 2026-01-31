import React, { useState } from "react";
import "../css/todolist.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
      },
    ]);

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="card todo-section">
      <h3>My Tasks</h3>

      <div className="input-group">
        <input
          type="text"
          placeholder="Tulis tugas baru..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              className="btn btn-error"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
