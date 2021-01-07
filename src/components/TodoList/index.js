import React from "react";
import TodoItem from "../TodoItem";
import { StyledUnorderedList } from "./styles";

const TodoList = ({ deleteFrom, todos }) => {
  return (
    <StyledUnorderedList>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} deleteFrom={deleteFrom} />;
const TodoList = ({deleteFrom , todos}) => {
  return (
    <StyledUnorderedList>
      {todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} deleteFrom={deleteFrom} />
        );
      })}
    </StyledUnorderedList>
  );
};

export default TodoList;
