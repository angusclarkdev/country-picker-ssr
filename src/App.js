import React, { Component } from 'react'
import styled from 'styled-components'
import CountryList from '@components/CountryList'
/** App styles */
const Section = styled.section`
  margin: 16px;
`
const Header = styled.h1`
  text-transform: uppercase;
  margin-left: 8px;  
  margin-bottom: 16px;
  `

class App extends Component {
  render () {
    return (
      <Section>
        <Header> Shipping Country: </Header>
        <CountryList />
      </Section>
    )
  }
}

export default App
