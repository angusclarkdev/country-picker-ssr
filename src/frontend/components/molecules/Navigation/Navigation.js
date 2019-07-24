import React, { PureComponent } from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

class Navigation extends PureComponent {
  render () {
    const { navBar, navListItem } = styles
    return (
      <nav>
        <ul className={navBar}>
          <li className={navListItem}> icon </li>
          <li className={navListItem}>
            {/* <Link to='/cookbook'> My Cookbook </Link> */}
          </li>
          <li className={navListItem} onClick={this.toggleSearch}>
            {/* <Link to='/search'> search </Link> */}
          </li>
          <li className={navListItem} onClick={this.props.toggleModal}> Add new meal </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
