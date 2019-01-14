import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import VocabularyBuilderView from 'views/vocabularyBuilder/VocabularyBuilder'

import Authenticated from 'containers/Authenticated'
import Words from 'containers/Words'

@Authenticated
@Words
class VocabularyBuilder extends Component {

  static propTypes = {
  }

  render() {
    return (
      <VocabularyBuilderView
      />
      )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocabularyBuilder)

