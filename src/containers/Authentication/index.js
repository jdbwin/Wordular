import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  toggleModal
} from 'modules/visibility'

const Authentication = AuthenticationComponent => {
  class Base extends Component {

    closeModal = () => {
      if (this.props.isModalVisible) {
        this.props.toggleModal()
      }
    }

    render () {
      return (
        <AuthenticationComponent
          closeModal={this.closeModal}
          {...this.props}
        />
      )
    }
  }

  const mapStateToProps = ({ visibility })  => ({
    isModalVisible: visibility.isModalVisible
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    toggleModal
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(Base)
}

export default Authentication


