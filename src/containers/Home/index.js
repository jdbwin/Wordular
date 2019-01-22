import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Words from 'containers/Words'

import {
  retrieveWords
} from 'modules/home'

import {
  setSearchTerm
} from 'modules/search'

import HomeView from 'views/Home'

@Words
class Home extends Component {

  componentWillMount() {
    this.props.retrieveWords()
  }

  getFeaturedWordDefinition = word => {
    this.props.setSearchTerm(word)
    this.props.search(word)
  }

  render() {
    const { home } = this.props

    return (
      <HomeView
        getFeaturedWordDefinition={this.getFeaturedWordDefinition}
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
  retrieveWords,
  setSearchTerm
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

