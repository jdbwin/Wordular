import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBarView from '../../views/SearchBar'

import { getDefinition } from '../../utils/api/wordnik'

class SearchBar extends Component {

  static propTypes = {
  }

  search = event => { 
    getDefinition(event.target.value)
  }

  render() {
    return (
      <SearchBarView onKeyUp={this.search} />
    )
  }
}

const mapStateToProps = ({ }) => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

