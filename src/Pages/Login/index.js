import React from 'react';
import LoginForm from './Form';

const { useCallback } = React;

const LoginPage = ({ history: { push } }) => {

  const pushToTodos = useCallback(() => push("/todos"), [push])

  return (
    <LoginForm
      onSumbit={pushToTodos}
    />
  )
}

export default LoginPage;