import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LogOutView from 'components/forms/Logout'

import Authentication from 'containers/Authentication'

import {
  logout
} from 'modules/auth'

@Authentication
class LogOut extends Component {

  static propTypes = {
  }

  logout = async values => {
    const {
      email,
      password
    } = values

    await this.props.logout()

    // clear state
    window.location.reload()
  }

  render() {
    return (
      <LogOutView
        accept={this.logout}
        close={this.props.closeModal}
      />
      )
  }
}

const mapStateToProps = ({ form }) => ({
  logoutForm: form.LogOut
})

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut)


