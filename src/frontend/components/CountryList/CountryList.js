import React, { Component } from 'react'
import styled from 'styled-components'
import { listOfCountries } from './listOfCountries'

const List = styled.ul`
  /* margin: 8px; */

  li {
    padding: 8px;
  }
`

class CountryList extends Component {
  render () {
    return (
      <List>
        { listOfCountries.map(country => (
          <li> <img
            src={require(`../../resources/images/${country.flag.toLowerCase()}.svg`)}
            alt={`a ${country.flag.toLowerCase()} flag`}
            width='40'
          /> { country.title } </li>
        ))}
      </List>
    )
  }
}

export default CountryList
