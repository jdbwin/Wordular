import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  retrieveWords
} from 'modules/home'

import HomeView from 'views/home/Home'

class Home extends Component {

  componentWillMount() {
    this.props.retrieveWords()
  }

  render() {
    const { home } = this.props

    return (
      <HomeView
        retrievingWords={home.retrievingWords}
        words={home.words}
      />
    )
  }
}

const mapStateToProps = ({ home }) => ({
  home
})

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveWords
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

