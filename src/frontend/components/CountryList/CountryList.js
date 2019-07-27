import React, { useState } from 'react'
import styled from 'styled-components'
import { listOfCountries } from './listOfCountries'

const handleClick = (country) => {
  console.log(country)
}
const CountryList = () => {
// set selected country in state
  const [ country, selectCountry ] = useState('United Kingdom')

  return (
    <List>
      { listOfCountries.map(country => (
        <li onClick={() => selectCountry(`${country.title}`)(handleClick())}>
          <img src={require(`../../resources/images/${country.flag}.svg`)} alt={`a ${country.flag} flag`} width='40' />
          <span>{ country.title } </span>
        </li>
      ))}
    </List>
  )
}

export default CountryList

const List = styled.ul`
  li {
    display: flex;
    align-items: center; 
    margin: 16px 8px;
    cursor: pointer;
    width: fit-content;
  }

  span {
    padding-top: 3px;
  }
  
  img {
    margin-right: 16px;
  }
`
