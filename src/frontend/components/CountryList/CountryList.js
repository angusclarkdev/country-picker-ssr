import React, { /* useState */ } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { listOfCountries } from './listOfCountries'

// const SelectCountry = (countryTitle, selectCountry) => {
//   selectCountry(countryTitle)

// }

const CountryList = (props) => {
  // set selected country in state
  // const [ currentCountry, selectCountry ] = useState('United Kingdom')
  return (
    <List>
      { listOfCountries.map((country, i) => {
        const routeFromTitle = country.title.split(' ').join('')
        return (
          <li key={i} onClick={() => props.history.push(routeFromTitle)}>
            <img src={require(`../../resources/images/${country.flag}.svg`)} alt={`a ${country.flag} flag`} width='40' />
            <span>{ country.title } </span>
          </li>
        )
      })}
    </List>
  )
}

export default withRouter(CountryList)

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
