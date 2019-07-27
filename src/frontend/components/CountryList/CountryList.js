import React, { Component } from 'react'
import styled from 'styled-components'
import { listOfCountries } from './listOfCountries'

const List = styled.ul`
  /* margin: 8px; */

  li {
    display: flex;
    align-items: center; 
    margin: 16px 8px;
    cursor: pointer;
  }

  span {
    padding-top: 3px;
  }
  
  img {
    margin-right: 16px;
  }
`

class CountryList extends Component {
  render () {
    return (
      <List>
        { listOfCountries.map(country => (
          <li>
            <img src={require(`../../resources/images/${country.flag}.svg`)} alt={`a ${country.flag} flag`} width='40' />
            <span>{ country.title } </span>
          </li>
        ))}
      </List>
    )
  }
}

export default CountryList
