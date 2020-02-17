import React from 'react';
import "./Form.css";
import Field from './Input';
import useFieldState from './useFieldState';

const { useCallback, useMemo } = React;


function LoginForm({ onSumbit }) {
  const [userName, userNameError, onChangeUserName] = useFieldState("")

  const [
    password,
    passwordError,
    onChangePassword
  ] = useFieldState("")



  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (userName && password) {
      onSumbit()
    }
  }, [onSumbit, userName, password]);

  const disabled = useMemo(() => {
    return !(userName && password) || userNameError || passwordError
  }, [userName, password, userNameError, passwordError])


  return (
    <form className="container loginForm" onSubmit={handleSubmit}>
      <div className="innerForm">

        <Field
          type="text"
          value={userName}
          placeholder="enter your name"
          onChange={onChangeUserName}
          error={userNameError}
        />


        <Field
          type="password"
          value={password}
          placeholder="enter your password"
          onChange={onChangePassword}
          error={passwordError}
        />

        <button disabled={disabled}>submit</button>
      </div>
    </form>
  )
}
export default LoginForm;