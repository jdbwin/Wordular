import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import VocabularyBuilderView from 'views/vocabularyBuilder/VocabularyBuilder'

import Authenticated from 'containers/Authenticated'
import Words from 'containers/Words'

import {
  getMyWords
} from 'modules/myWords'

import {
  setupRound
} from 'modules/vocabularyBuilder'

@Authenticated
@Words
class VocabularyBuilder extends Component {

  static propTypes = {
  }

  componentDidMount() {
    this.setupBuilder()
  }

  setupBuilder = async () => {
    await this.props.getMyWords()

    await this.props.setupRound(this.props.words)
  }

  render() {
    return (
      <VocabularyBuilderView
      />
      )
  }
}

const mapStateToProps = ({ myWords, vocabularyBuilder }) => ({
  words: myWords.myWords,
  wordsInPlay: vocabularyBuilder.wordsInPlay,
  wordForMatch: vocabularyBuilder.wordForMatch
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMyWords,
  setupRound
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocabularyBuilder)

