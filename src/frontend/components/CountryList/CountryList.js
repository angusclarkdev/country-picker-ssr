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
    width: fit-content;
  }

  span {
    padding-top: 3px;
  }
  
  img {
    margin-right: 16px;
  }
`

class CountryList extends Component {
  handleClick = () => {
    console.log('flag clicked')
  }

  render () {
    return (
      <List>
        { listOfCountries.map(country => (
          <li onClick={this.handleClick}>
            <img src={require(`../../resources/images/${country.flag}.svg`)} alt={`a ${country.flag} flag`} width='40' />
            <span>{ country.title } </span>
          </li>
        ))}
      </List>
    )
  }
}

export default CountryList
