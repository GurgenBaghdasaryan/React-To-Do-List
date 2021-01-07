import React, { useState } from "react";
import { StyledInput, StyledButton } from "./styles";

const AddTodo = ({ onCreate, sortAsc, sortDes }) => {
  const [value, setValue] = useState("");

  const clearInput = () => {
    setValue("");
  };

  const setInput = () => {
    if (!value) {
      return;
    }
    onCreate(value);
    clearInput();
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <StyledInput value={value} onChange={handleInputChange} />
      <StyledButton type="checkbox" onClick={() => setInput()}>
        ADD
      </StyledButton>
      
      <StyledButton type="checkbox" onClick={() => sortAsc()}>
        Sort Ascending
      </StyledButton>

      <StyledButton type="checkbox" onClick={() => sortDes()}>
        Sort Descending
      </StyledButton>
    </>
  );
};

export default AddTodo;
