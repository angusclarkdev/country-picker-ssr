import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// // import styled from 'styled-components'
import CountryListPage from '@pages/CountryListPage'
import ServedPage from '@pages/ServedPage'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={CountryListPage} />
        <Route path='/language' component={ServedPage} />
      </Switch>
    )
  }
}

export default App
