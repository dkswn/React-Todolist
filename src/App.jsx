import { useState } from "react";
import "./App.css";
import { TodoList } from "./Component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: task,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  return (
    <div className="app-container">
      <input
        value={task}
        onChange={handleOnChange}
        className="todo-input"
        type="text"
      />
      <button onClick={addTodo} className="add-btn">
        Add
      </button>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
