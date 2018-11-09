import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MyWordsView from '../../views/mywords/MyWords'

import {
  getMyWords
} from '../../modules/myWords'

class MyWords extends Component {

  static propTypes = {
  }

  componentDidMount() {
    this.props.getMyWords()
  }

  render() {
    return (
      <MyWordsView
        myWords={this.props.myWords}
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
