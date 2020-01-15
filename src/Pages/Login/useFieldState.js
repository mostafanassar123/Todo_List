import { useState, useCallback } from 'react'
import { validateField } from './validotor'

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");


  // changing input
  const onChange = useCallback(
    ({ target: { value } }) => {

      const isError = validateField(value);
      setError(isError ? "Field length must greater or equal 4" : "")
      setValue(value)
    },
    [setValue, setError]
  );


  return [
    value,
    error,
    onChange
  ]
}