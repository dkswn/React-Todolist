import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
    </>
  );
};
