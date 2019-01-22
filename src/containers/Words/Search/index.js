import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchView from 'components/Search'

import Words from 'containers/Words'

import {
  getRandomWord
} from 'modules/wordnik'

import {
  saveWord
} from 'modules/myWords'

@Words
class Search extends Component {

  static propTypes = {
    clearResults: PropTypes.func.isRequired,
    formatResults: PropTypes.func.isRequired,
    keyDownSearch: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func.isRequired
  }

  getRandomWord = () => {
    this.props.getRandomWord()

    // user must explicity 'search' to get results from random word
    this.props.clearResults()
  }

  saveWord = () => {
    const partsOfSpeech = Array.from(
      new Set(this.props.results.map(result => result.partOfSpeech))
    ).join(', ')

    this.props.saveWord({ word: this.props.searchTerm, part_of_speech: partsOfSpeech })
    this.clear()
  }

  // handle automatically setting searchTerm when random word is returned from wordnik
  componentDidUpdate(prevProps) {
    const { randomWord } = this.props

    if (prevProps.randomWord != randomWord) {
      this.props.setSearchTerm(randomWord.word)
    }
  }

  clear = () => {
    this.props.clearResults()
    this.props.setSearchTerm("")
  }

  render() {
    return (
      <SearchView
        search={() => this.props.search()}
        keyDownSearch={() => this.props.keyDownSearch()}
        getRandomWord={this.getRandomWord}
        results={this.props.formatResults(this.props.results)}
        onChange={event => this.props.setSearchTerm(event.target.value)}
        searchTerm={this.props.searchTerm}
        saveWord={this.saveWord}
        clear={this.clear}
        token={this.props.token}
      />
    )
  }
}

const mapStateToProps = ({
  auth,
  wordnik
}) => ({
  token: auth.token,
  randomWord: wordnik.randomWord
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomWord,
  saveWord
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

