import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoginView from '../../../components/forms/Login'

import Authentication from '../../Authentication'

import {
  login
} from '../../../modules/auth'

@Authentication
class Login extends Component {

  static propTypes = {
  }

  login = async values => {
    const {
      email,
      password
    } = values

    await this.props.login({ username: email, password })

    this.props.closeModal()
  }

  render() {
    return (
      <LoginView
        onSubmit={values => this.login(values)}
      />
      )
  }
}

const mapStateToProps = ({ form }) => ({
  loginForm: form.Login
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

