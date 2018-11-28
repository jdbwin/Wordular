import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import LoginView from '../../../components/forms/Login'

import Authentication from '../../Authentication'

@Authentication
class Login extends Component {

  static propTypes = {
  }

  render() {
    return (
      <LoginView
      />
      )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default reduxForm({
  form: 'login'
})(connected)

