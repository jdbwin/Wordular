import React from 'react'
import { reduxForm, Field } from 'redux-form'

import Input from 'components/forms/fields/Input'
import Button from 'components/buttons/Button'

const SignUp = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="name"
      type="text"
      placeholder="Your name"
      label="Name"
      component={Input}
    />
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
    <Field
      name="passwordConfirmation"
      type="password"
      placeholder="xxxxxx"
      label="Password confirmation"
      component={Input}
    />

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" />
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <Button
      text="Sign up"
      type="submit"
      color="is-success"
      modifier="is-fullwidth"
      disabled={submitting}
    />
  </form>
)

export default reduxForm({
  form: 'SignUp'
})(SignUp)

