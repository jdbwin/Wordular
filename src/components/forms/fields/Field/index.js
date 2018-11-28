import React from 'react'

const Field = ({
  input,
  placeholder,
  label,
  type,
  meta: {
    touched,
    error,
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

export default Field


