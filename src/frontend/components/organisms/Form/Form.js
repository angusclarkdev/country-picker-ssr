import React, { Component, Fragment } from 'react'
import styles from './Form.scss'
class Form extends Component {
  state = {
    name: '',
    ingredients: [],
    method: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    const { form, method, submit, cancel } = styles
    return (
      <Fragment>
        <p> Add your new recipe using the form below. </p>
        <form className={form}>
          <input
            type='text'
            id='recipe-name-input'
            name='name'
            placeholder='Name'
            onChange={this.handleChange}
            value={this.state.name} />
          <input
            type='text'
            id='recipe-ingredients-input'
            name='ingredients'
            placeholder='Ingredients'
            onChange={this.handleChange}
            value={this.state.ingredients} />
          <textarea
            className={method}
            name='method'
            placeholder='Method'
            onChange={this.handleChange}
            value={this.state.method} />
        </form>
        <button className={submit}> Submit </button>
        <button className={cancel}> Cancel </button>
      </Fragment>
    )
  }
}

export default Form
