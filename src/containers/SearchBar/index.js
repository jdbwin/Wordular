import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBarView from '../../views/SearchBar'


import {
  searchWordnik
} from '../../modules/wordnik'

class SearchBar extends Component {

  static propTypes = {
  }

  search = event => { 
    this.props.searchWordnik(event.target.value)
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <SearchBarView onKeyUp={this.search} results={this.props.results} />
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

