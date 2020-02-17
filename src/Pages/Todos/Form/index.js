import React from 'react';
import Button from '../Button';
import "./index.css";

const { useState, useCallback, memo } = React;


const Form = ({ onSubmit }) => {

  const [inputValue, setState] = useState("");


  const handleChange = useCallback(
    (e) => {
      const { target: { value } } = e;
      setState(value)
    },
    [setState]);


  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (inputValue) {
        onSubmit(inputValue);
        setState("")
      }
    },

    [onSubmit, inputValue, setState]
  );

  return (
    <form onSubmit={handleOnSubmit}>
      <input placeholder="type a todo" value={inputValue} onChange={handleChange} />
      <Button disabled={!inputValue} title="+" />
    </form>
  )
}

export default memo(Form);

