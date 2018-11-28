import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Authentication = AuthenticationComponent => {
  class Base extends Component {

    static propTypes = {
    }

    render () {
      return (
        <AuthenticationComponent
          {...this.props}
        />
        )
    }
  }

  const mapStateToProps = ({ users })  => ({
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(Base)
}

export default Authentication


