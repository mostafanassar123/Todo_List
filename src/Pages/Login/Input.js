import React from 'react';

const Input = ({ type, value, placeholder, onChange, error }) => {
  return (
    <>
      <input
        className="extra"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </>
  )
}

export default React.memo(Input);