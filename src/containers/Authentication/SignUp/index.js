import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import SignUpView from '../../../components/forms/SignUp'

import Authentication from '../../Authentication'

import {
  createUser
} from '../../../modules/users'

@Authentication
class SignUp extends Component {

  static propTypes = {
  }

  createUser = () => {
    const {
      email,
      name,
      password
    } = this.props.signUpForm.values

    this.props.createUser({ email, name, password })
  }

  render() {
    return (
      <SignUpView
        handleSubmit={this.createUser}
      />
      )
  }
}

const mapStateToProps = ({ form }) => ({
  signUpForm: form.SignUp
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser
}, dispatch)

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default reduxForm({
  form: 'SignUp'
})(connected)

