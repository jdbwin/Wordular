import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// add underscore so external package is obvious origin
import { debounce as _debounce } from 'lodash'

import SearchView from '../../components/Search'

import {
  getDefinitions,
  getRandomWord,
  clearResults
} from '../../modules/wordnik'

class Search extends Component {

  static propTypes = {
    results: PropTypes.array
  }

  state = {
    searchTerm: ''
  }

  // search Wordnik API for word definition
  search = _debounce(() => this.props.getDefinitions(this.state.searchTerm), 500)

  handleSearch = () => {
    if (!this.state.searchTerm) {
      this.props.clearResults()
      return
    } 

    this.search()
  }

  getRandomWord = () => {
    this.props.getRandomWord()

    // user must explicity 'search' to get results from random word
    this.props.clearResults()
  }

  formatResults = results => {
    if (!results.length) {
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

  // handle automatically setting searchTerm when random word is returned from wordnik
  componentDidUpdate(prevProps) {
    const { randomWord } = this.props

    if (prevProps.randomWord != randomWord) {
      this.setState({ searchTerm: randomWord.word })
    }
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm })
  }

  render() {
    return (
      <SearchView
        search={() => this.handleSearch()}
        getRandomWord={this.getRandomWord}
        results={this.formatResults(this.props.results)}
        onChange={event => this.onInputChange(event.target.value)}
        searchTerm={this.state.searchTerm}
      />
    )
  }
}

const mapStateToProps = ({ wordnik }) => ({
  results: wordnik.results,
  randomWord: wordnik.randomWord
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDefinitions,
  getRandomWord,
  clearResults
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

