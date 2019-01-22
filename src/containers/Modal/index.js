import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  toggleModal
} from 'modules/visibility'

import {
  createUser
} from 'modules/users'

import ModalView from 'components/modals'

class Modal extends Component {

  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    modalType: PropTypes.string
  }

  render() {
    return (
      <ModalView
        isVisible={this.props.isVisible}
        modalType={this.props.modalType}
        createUser={this.props.createUser}
        toggleModal={() => this.props.toggleModal()}
      />
    )
  }
}

const mapStateToProps = ({ visibility }) => ({
  isVisible: visibility.isModalVisible,
  modalType: visibility.modalType
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleModal
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

