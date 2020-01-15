import React, { memo } from 'react';
import Button from '../Button';
import './index.css';

const { useState, useCallback } = React;

const TodoItem = ({ todoName, onDelete, onUpdate }) => {
  const [editable, updateState] = useState(false);
  const [inputValue, setInputValue] = useState(todoName);



  const handleChange = useCallback(
    ({ target: { value } }) => {
      setInputValue(value)
    },
    [setInputValue]
  );

  const toggleEdiatbleState = useCallback(
    () => {
      updateState(oldValue => {
        if (oldValue === true && todoName !== inputValue) {
          onUpdate(inputValue)
        }
        return !oldValue
      })
    }, [updateState, onUpdate, todoName, inputValue]
  );



  return (
    <li>
      {editable === true ? (
        <input value={inputValue} onChange={handleChange} />
      ) : (
          <p>
            {todoName}
          </p>
        )}

      <section className="actionContainer">
        <span onClick={toggleEdiatbleState}>
          {editable ? "update" : "edit"}
        </span>
        <Button className="danger" title="-" onClick={onDelete} />
      </section>
    </li>
  )
}

export default memo(TodoItem);