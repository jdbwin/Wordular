import React from 'react'
import { Field } from 'redux-form'

import RenderField from '../fields/Field'

const SignUp = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="name"
      type="text"
      placeholder="Your name"
      label="Name"
      component={RenderField}
    />
    <Field
      name="email"
      type="email"
      placeholder="you@example.com"
      label="Email"
      component={RenderField}
    />
    <Field
      name="password"
      type="password"
      placeholder="xxxxxx"
      label="Password"
      component={RenderField}
    />
    <Field
      name="passwordConfirmation"
      type="password"
      placeholder="xxxxxx"
      label="Password confirmation"
      component={RenderField}
    />

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" />
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>
     <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
  </form>
)

export default SignUp


