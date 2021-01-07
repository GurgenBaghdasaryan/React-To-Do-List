import React, { useState } from "react";
import { AddTodo, TodoList } from "./components";
import "./App.css";
import "./App.css";
import { AddTodo, TodoList } from './components';

const App = () => {
  const todos = [
    { id: 1, completed: false, title: "java" },
    { id: 2, completed: false, title: "node js" },  
    { id: 2, completed: false, title: "node js" },
    { id: 3, completed: false, title: "react" },
  ];
  const [todo, setTodos] = useState(todos);

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

  const handleDesSort = () => {
    const arr = [];

    todo.forEach((i) => arr.push(i.title));
    const sortArray = arr.sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
      return 0;
    });

    arr.map((e, i) => (todo[i].title = e));
    const y = [...todo];
    console.log(todo);
    setTodos(y);
  };

  const handleAscSort = () => {
    const arr = [];

    todo.forEach((i) => arr.push(i.title));
    const sortArray = arr.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
    
    arr.map((e, i) => (todo[i].title = e));
    const y = [...todo];
    console.log(todo);
    setTodos(y);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo
        todos={todo}
        onCreate={addedTodo}
        key={todo.id}
        sortAsc={handleAscSort}
        sortDes={handleDesSort}
      />
      <TodoList todos={todo} deleteFrom={deleteFrom} />
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo todos={todo} onCreate={addedTodo} key={todo.id} />
        <TodoList todos={todo} deleteFrom={deleteFrom} />
    </div>
  );
};

export default App;
