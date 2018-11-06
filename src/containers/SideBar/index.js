import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SideBarView from '../../views/SideBar'

import { toggleSidebar } from '../../modules/visibility'

class SideBar extends Component {

  static propTypes = {
    isVisible: PropTypes.bool.isRequired
  }

  toggleSideBar = () => { this.props.toggleSidebar() }

  render() {
    return (
      <SideBarView toggleSideBar={this.toggleSideBar } isVisible={this.props.isVisible} />
    )
  }
}

const mapStateToProps = ({ visibility }) => ({
  isVisible: visibility.isVisible
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleSidebar
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar)
