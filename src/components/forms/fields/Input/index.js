import React from 'react'

const Input = ({
  input,
  label,
  placeholder,
  type,
  meta: {
    error,
    touched,
    warning
  }
}) => (
  <div className="field">
    {label && <label className="label">{label}</label>}
    <div className="control">
      <input
        {...input}
        className="input"
        type={type}
        placeholder={placeholder}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default Input

