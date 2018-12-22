import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoginView from '../../../components/forms/Login'

import Authentication from '../../Authentication'

import {
  loginUser
} from '../../../modules/users'

@Authentication
class Login extends Component {

  static propTypes = {
  }

  loginUser = values => {
    const {
      email,
      password
    } = values

    this.props.loginUser({ email, password })
  }

  render() {
    return (
      <LoginView
        onSubmit={values => this.loginUser(values)}
      />
      )
  }
}

const mapStateToProps = ({ form }) => ({
  loginForm: form.Login
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

