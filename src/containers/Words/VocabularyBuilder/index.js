import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import VocabularyBuilderView from 'views/VocabularyBuilder'

import Authenticated from 'containers/Authenticated'
import Words from 'containers/Words'

import {
  randomIndexFromArray
} from 'utils/helpers'

import {
  getMyWords
} from 'modules/myWords'

import {
  selectWordsForRound
} from 'modules/vocabularyBuilder'

const initialState = {
  definitionForRound: '',
  optionsForRound: null,
  correctOptionForRound: '',
  isCorrect: false,
  isResultShown: false
}

@Authenticated
@Words
class VocabularyBuilder extends Component {

  state = { ...initialState }

  componentDidMount() {
    this.setupRound()
  }

  setupRound = async () => {
    if (!this.props.word) {
      await this.props.getMyWords()
    }

    this.setState({ ...initialState })

    await this.props.selectWordsForRound(this.props.words)

    await this.props.search(this.props.wordForMatch.word)

    const {
      definition,
      wordForMatch,
      wordsInPlay
    } = this.props

    this.setState({
      definitionForRound: definition[randomIndexFromArray(definition)].text,
      optionsForRound: this.setOptionsForRound(wordsInPlay),
      correctOptionForRound: this.setCorrectOptionForRound(wordForMatch, wordsInPlay)
    })
  }

  setOptionsForRound = wordsInPlay => (
    wordsInPlay.reduce((acc, curr, index) => {
      acc[index] = curr
      return acc
    }, {})
  )

  setCorrectOptionForRound = (wordForMatch, wordsInPlay) => (
    wordsInPlay.findIndex(word => word.word === wordForMatch.word)
  )

  checkSelection = selection => {
    this.setState({
      isCorrect: selection === this.state.correctOptionForRound,
      isResultShown: true
    })
  }

  render() {
    return (
      <VocabularyBuilderView
        {...this.state}
        checkSelection={this.checkSelection}
        next={this.setupRound}
      />
    )
  }
}

const mapStateToProps = ({ myWords, vocabularyBuilder, wordnik }) => ({
  words: myWords.myWords,
  wordsInPlay: vocabularyBuilder.wordsInPlay,
  wordForMatch: vocabularyBuilder.wordForMatch,
  definition: wordnik.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMyWords,
  selectWordsForRound
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocabularyBuilder)

