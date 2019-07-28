import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CountryList from '@components/CountryList'
import { AST_PropAccess } from 'terser';

/** Component styles */
const Section = styled.section`
  margin: 16px;
`
const Header = styled.h1`
  text-transform: uppercase;
  margin-left: 8px;  
  margin-bottom: 16px;
  `

const CountryListPage = () => {
  return (
    <Section>
      <Header> Shipping Country: </Header>
      <CountryList />
    </Section>
  )
}

export default CountryListPage
