import React, { Component, Fragment } from 'react'
import Navigation from '@molecules/Navigation'
// import RecipeList from '@organisms/RecipeList'
import Form from '@organisms/Form'
import Modal from '@molecules/Modal'

class HomePage extends Component {
  state = {
    isModalOpen: false
  }

  handleToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  render () {
    return (
      <Fragment>
        <Navigation toggleModal={this.handleToggleModal} />
        {/* <RecipeList /> */}
        <Modal isOpen={this.state.isModalOpen} title='Add a new recipe'>
          <Form />
        </Modal>
      </Fragment>
    )
  }
}

export default HomePage
