import { useEffect } from "react";

function TodoList({ todos, onDelete, toggleTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="flex my-4 bg-slate-100">
          <h3
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed && "line-through" }}
            className="text-2xl text-left cursor-pointer py-2 pl-3 font-mono font-medium flex-1"
          >
            {todo.todo}
          </h3>
          <button
            onClick={() => onDelete(todo.id)}
            className="bg-red-200 rounded-md p-2 px-3"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
