import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MyWordsView from '../../../views/mywords/MyWords'

import Words from '../../Words'

import {
  getMyWords
} from '../../../modules/myWords'

@Words
class MyWords extends Component {

  static propTypes = {
    clearResults: PropTypes.func.isRequired,
    formatResults: PropTypes.func.isRequired,
    getDefinitions: PropTypes.func.isRequired,
    myWords: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired
  }

  state = {
    visibleItem: null
  }

  toggleVisibility = item =>  {
    this.setState({ visibleItem: item })
  }

  showWord = (word, item) => {
    this.props.clearResults()
    this.props.getDefinitions(word)

    this.toggleVisibility(item)
  }

  componentDidMount() {
    this.props.getMyWords()
  }

  render() {
    return (
      <MyWordsView
        myWords={this.props.myWords}
        toggleVisibility={this.toggleVisibility}
        visibleItem={this.state.visibleItem}
        results={this.props.formatResults(this.props.results)}
        showWord={this.showWord}
      />
      )
  }
}

const mapStateToProps = ({ myWords }) => ({
  myWords: myWords.myWords
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMyWords
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWords)

