import React, { useState } from "react";
import { AddTodo, TodoList } from "./components";
import "./App.css";

const App = () => {
  const [todo, setTodos] = useState(todos);

  const todos = [
    { id: 1, completed: false, title: "java" },
    { id: 2, completed: false, title: "node js" },
    { id: 3, completed: false, title: "react" },
  ];

  const deleteFrom = (e) => {
    const newArr = [...todo];
    newArr.splice(todo.indexOf(e), 1);
    setTodos(newArr);
  };

  const addedTodo = (value) => {
    const newTodo = {
      id: todo.length + 1,
      completed: false,
      title: value,
    };
    
    const newArr = [...todo];
    newArr.push(newTodo);
    setTodos(newArr);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo todos={todo} onCreate={addedTodo} key={todo.id} />
      <TodoList todos={todo} deleteFrom={deleteFrom} />
    </div>
  );
};

export default App;
