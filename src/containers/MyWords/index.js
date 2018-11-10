import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MyWordsView from '../../views/mywords/MyWords'

import {
  getMyWords
} from '../../modules/myWords'

import {
  getDefinitions
} from '../../modules/wordnik'

class MyWords extends Component {

  static propTypes = {
  }

  state = {
    visibleItem: null
  }

  toggleVisibility = item => {
    const { visibleItem } = this.state

    console.log('sup')

    this.setState({ visibleItem: item })
  }

  getDefinition = word => {
    this.props.getDefinitions(word)

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


  componentDidMount() {
    this.props.getMyWords()
  }

  render() {
    console.log(this.state.visibleItem)
    return (
      <MyWordsView
        myWords={this.props.myWords}
        toggleVisibility={this.toggleVisibility}
        visibleItem={this.state.visibleItem}
        getDefinition={this.getDefinition}
        results={this.formatResults(this.props.results)}
      />
    )
  }
}

const mapStateToProps = ({ myWords, wordnik }) => ({
  myWords: myWords.myWords,
  results: wordnik.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMyWords,
  getDefinitions
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWords)
