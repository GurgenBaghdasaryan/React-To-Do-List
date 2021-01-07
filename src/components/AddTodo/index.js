import React, { useState } from "react";
import { StyledInput } from "./styles";

const AddTodo = ({ onCreate }) => {
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
      <button type="checkbox" onClick={() => setInput()}>
        ADD
      </button>
    </>
  );
};

export default AddTodo;
