import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SignUpView from '../../../components/forms/SignUp'

import Authentication from '../../Authentication'

import {
  createUser
} from '../../../modules/users'

@Authentication
class SignUp extends Component {

  static propTypes = {
  }

  createUser = values => {
    const {
      email,
      name,
      password
    } = values

    this.props.createUser({ email, name, password })
  }

  render() {
    return (
      <SignUpView
        onSubmit={values => this.createUser(values)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

