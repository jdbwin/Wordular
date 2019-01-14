import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Authenticated = AuthenticatedComponent => {
  class Base extends Component {

    static propTypes = {
    }

    componentWillMount() {
      if (!this.props.token) {
        this.props.history.push('/')
      }
    }

    render () {
      return (
        <AuthenticatedComponent
          {...this.props}
        />
        )
    }
  }

  const mapStateToProps = ({ auth })  => ({
    token: auth.token
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(Base)
}

export default Authenticated



