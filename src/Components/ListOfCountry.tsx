import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";

export const Test = () => {
  const { country } = useContext(GlobalContext)
  console.log(country);
 
  
  // const filterCountry = country.filter(city => city.name?.toLocaleLowerCase() === place.toLocaleLowerCase())
  // console.log(filterCountry);
  
  return (
    <Link to="/">
    <div>
      {country?.map(detailCountry => {
        return (
          <Link to={`/${detailCountry.name}`}>
          <div className="detail">
            <img src={detailCountry.flag} alt="" />
            <div className="content">
              <article>
                <h2>{detailCountry.name}</h2>
                <p><b>Population : </b>{detailCountry.population}</p>
                <p><b>Region : </b>{detailCountry.region}</p>
                <p><b>Capilal: </b>{detailCountry.capital}</p>
              </article>
            </div>
          </div>
          </Link>
        )
      })}
    </div>
    </Link>
  )

}