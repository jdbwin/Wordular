import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBarView from '../../components/NavBar'

class NavBar extends Component {

  static propTypes = {
    isVisible: PropTypes.bool.isRequired
  }

  render() {
    return (
      <NavBarView
      />
      )
  }
}

const mapStateToProps = ({ }) => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
