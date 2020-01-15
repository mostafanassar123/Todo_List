import React from 'react';
import Form from './Form';
import TodoItem from './TodoItem';
import LogoutButton from './logoutView';

const { useState, useCallback } = React;

const TodosPage = ({ history: { push } }) => {

  const [todos, setState] = useState([])

  const addTodo = useCallback(
    value => {
      setState(oldtodos => [
        ...oldtodos,
        {
          name: value,
          id: oldtodos.length
        }
      ]);
    },
    [setState]);

  const hanleDelete = useCallback(
    (id) => () => {
      setState(oldTodos => {
        return oldTodos.filter(item => item.id !== id)
      })
    },
    [setState]);

  const handeUpdate = useCallback(
    (id) => (newTodoName) => {
      setState(oldTodos => {
        return oldTodos.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              name: newTodoName
            }
          } else return item;
        })
      })
    },
    [setState]
  );


  const onLogOut = useCallback(() => push("/"), [push])

  return (
    <div className="container">
      <Form
        onSubmit={addTodo}
      />

      <ul>
        {todos.map((item) => (
          <TodoItem
            todoName={item.name}
            key={item.id}
            onDelete={hanleDelete(item.id)}
            onUpdate={handeUpdate(item.id)}
          />
        ))}
      </ul>

      <LogoutButton onClick={onLogOut} />
    </div>
  )
}

export default TodosPage;