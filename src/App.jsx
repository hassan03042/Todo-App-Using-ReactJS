import { useCallback, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Reading Book",
      id: Date.now(),
      completed: false,
    },
  ]);

  const handleAddTodo = useCallback(() => {
    const todosArr = [
      ...todos,
      {
        todo,
        id: Date.now(),
        completed: false,
      },
    ];

    setTodos(todosArr);
    setTodo("");
  }, [todo]);

  const handleOnDelete = useCallback((id) => {
    const filter = todos.filter((data) => data.id !== id);
    setTodos([...filter])
    
  }, [todos]);

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="font-semibold text-3xl">Todo App</h1>

      <TodoInput
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onClick={handleAddTodo}
      />

      <TodoList
      toggleTodo={handleOnDelete}
      todos={todos} onDelete={handleOnDelete} />
    </div>
  );
}

export default App;
