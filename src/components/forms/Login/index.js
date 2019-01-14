import React from 'react'
import { reduxForm, Field } from 'redux-form'

import Button from 'components/buttons/Button'
import Input from 'components/forms/fields/Input'

const Login = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      type="email"
      placeholder="you@example.com"
      label="Email"
      component={Input}
    />
    <Field
      name="password"
      type="password"
      placeholder="xxxxxx"
      label="Password"
      component={Input}
    />
    <Button
      text="Log in"
      type="submit"
      color="is-success"
      modifier="is-fullwidth"
      disabled={submitting}
    />
  </form>
)

export default reduxForm({
  form: 'Login'
})(Login)

