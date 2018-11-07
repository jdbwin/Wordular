import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// add underscore so external package is obvious origin
import { debounce as _debounce } from 'lodash'

import SearchView from '../../views/Search'

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
  search = _debounce(() => this.props.getDefinitions(this.state.searchTerm), 1000)

  handleSearch = () => {
    if (!this.state.searchTerm) {
      this.props.clearResults()
      return
    } 

    this.search()
  }

  getRandomWord = () => this.props.getRandomWord()

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
        results={this.props.results}
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

