import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

import ModalContents from '@molecules/ModalContents'
import styles from './Modal.scss'

export default class Modal extends PureComponent {
  render () {
    const modal = () => {
      if (this.props.isOpen) {
        return (
          <div className={styles.modal}>
            <ModalContents title={this.props.title} children={this.props.children} />
          </div>
        )
      } else return null
    }

    return createPortal(modal(), document.getElementById('modal'))
  }
}
