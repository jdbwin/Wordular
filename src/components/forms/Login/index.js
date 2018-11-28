import React from 'react'

const Login = () => (
  <span>
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input className="input" type="text" placeholder="you@example.com" />
      </div>
    </div>

    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <input className="input" type="password" placeholder="xxxxxx" />
      </div>
    </div>
  </span>
)

export default Login

