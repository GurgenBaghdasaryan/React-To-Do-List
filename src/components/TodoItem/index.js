import React from "react";
import { StyledButton, StyledList, StyledInput } from "./styles";

const TodoItem = ({ todo, deleteFrom }) => {
  return (
    <StyledList>
      <span>
        <StyledInput type="checkbox" />
        <strong>{todo.id}</strong>
        &nbsp;
        {todo.title}
      </span>

      <StyledButton className="x" onClick={() => deleteFrom(todo)}>
        &times;
      </StyledButton>
    </StyledList>
  );
};

export default TodoItem;
