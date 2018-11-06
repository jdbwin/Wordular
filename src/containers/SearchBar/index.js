import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// add underscore so external package is obvious origin
import { debounce as _debounce } from 'lodash'

import SearchBarView from '../../views/SearchBar'

import {
  searchWordnik
} from '../../modules/wordnik'

class SearchBar extends Component {

  static propTypes = {
    results: PropTypes.array
  }

  // search Wordnik API for word definition
  search = _debounce(word => this.props.searchWordnik(word), 1000)

  render() {
    return (
      <SearchBarView
        onKeyUp={event => this.search(event.target.value)}
        results={this.props.results}
      />
    )
  }
}

const mapStateToProps = ({ wordnik }) => ({
  results: wordnik.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchWordnik
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

