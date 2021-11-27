import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
import {Link} from "react-router-dom"

export const Test = () => {
  const { displayCountry } = useContext(GlobalContext)
  return (
    <Link to="/">
    <div>
      {displayCountry?.map(detailCountry => {
        console.log(detailCountry , 'detailCountry')
        return (
          <Link to={`/${detailCountry.name?.common}`}>
          <div className="detail">
            <img src={detailCountry.flags.png} alt="" />
            <div className="content">
              <article>
                <h2>{detailCountry.name?.common}</h2>
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