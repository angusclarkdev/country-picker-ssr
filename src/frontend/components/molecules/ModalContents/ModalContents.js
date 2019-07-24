import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

class ModalContents extends PureComponent {
  static Proptypes = {
    // title to render
    title: PropTypes.string,
    // children (can be any type)
    children: PropTypes.node
  }
  render () {
    return (
      <Fragment>
        <h2> {this.props.title} </h2>
        {this.props.children}
      </Fragment>
    )
  }
}

export default ModalContents
