import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// add underscore so external package is obvious origin
import { debounce as _debounce } from 'lodash'

import {
  getDefinitions,
  clearResults
} from 'modules/wordnik'

const Words = WordsComponent => {
  class Base extends Component {

    static propTypes = {
      clearResults: PropTypes.func.isRequired,
      getDefinitions: PropTypes.func.isRequired,
      results: PropTypes.array.isRequired
    }

    state = {
      searchTerm: ''
    }

    formatResults = results => {
      if (!results || !results.length) {
        return
      }

      // organise definitions into part of speech
      return results.reduce((acc, curr) => {
        const partOfSpeech = curr.partOfSpeech ? curr.partOfSpeech : ''

        acc[partOfSpeech]
          ? acc[partOfSpeech].push(curr)
          : acc[partOfSpeech] = [curr]
        return acc
      }, {})
    }

    // search Wordnik API for word definition
    setSearchTerm = searchTerm => {
      this.setState({ searchTerm })
    }

    search = () => this.props.getDefinitions(this.state.searchTerm)

    // debounce get to wordnik for definitions
    searchDebounced = _debounce(() => this.search(), 500)

    keyDownSearch = () => {
      if (!this.state.searchTerm) {
        return
        this.props.clearResults()
      }

      this.searchDebounced()
    }

    componentWillUnmount() {
      // clear results before transitioning
      this.props.clearResults()
    }

    render () {
      return (
        <WordsComponent
          {...this.props}
          formatResults={this.formatResults}
          results={this.props.results}
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          keyDownSearch={this.keyDownSearch}
          search={this.search}
        />
        )
    }
  }

  const mapStateToProps = ({ wordnik })  => ({
    results: wordnik.results
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    getDefinitions,
    clearResults
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(Base)
}

export default Words

