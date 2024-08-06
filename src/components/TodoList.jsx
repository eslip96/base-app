import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("todo cannot an empty");
      setTodo("");
      return;
    }

    setTodos((prevTodos) => {
      const newTodo = {
        id: todos.at(-1)?.id + 1 || 1,
        title: todo,
        done: false,
      };
      return [...prevTodos, newTodo];
    });
    console.log(todos);
    setTodo("");
  }

  function handleComplete(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function renderTodos() {
    return todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      );
    });
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} className="add-todo">
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {renderTodos()}
    </div>
  );
}
