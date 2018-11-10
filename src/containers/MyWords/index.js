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

  state = {
    visibleItems: []
  }

  toggleVisibility = selectedItem => {
    const itemIndex = this.state.visibleItems.indexOf(selectedItem)
    let visibleItems

    if (itemIndex >= 0) {
      this.state.visibleItems.splice(itemIndex, 1)

      visibleItems = this.state.visibleItems
    } else {
      visibleItems = [ ...this.state.visibleItems, selectedItem ]
    }

    this.setState({ visibleItems })
  }


  componentDidMount() {
    this.props.getMyWords()
  }

  render() {
    return (
      <MyWordsView
        myWords={this.props.myWords}
        toggleVisibility={this.toggleVisibility}
        visibleItems={this.state.visibleItems}
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
