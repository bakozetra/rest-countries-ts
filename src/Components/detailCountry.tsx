import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import { GlobalContext } from './GlobalState';
export function DetailCountry() {
   const {allcountries } = useContext(GlobalContext)
   interface ParamTypes {
    place : string
  }
  let { place } = useParams<ParamTypes>()
  console.log(place , 'place')
   let filterCountry = allcountries?.find(p => p?.name?.common === place)
  //  console.log(filterCountry  , 'filterCountry ')
   console.log(filterCountry?.name?.nativeName?.common , 'filterCountry?.name?.nativeName?.common')
  return (
     <div>
          return  <section>
              <img src={filterCountry?.flags.png}/>
              <article>
                <h2>{filterCountry?.name?.common}</h2>
                 <div>
                   <ul>
                     <li><b>Native Name:</b> {filterCountry?.name?.nativeName?.common}</li>
                     <li><b> Population:</b>{filterCountry?.population}</li>
                     <li><b> Region:</b>{filterCountry?.region}</li>
                     <li><b>Sube Region:</b>{filterCountry?.subregion}</li>
                     <li><b> Capital :</b>{filterCountry?.capital}</li>
                   </ul>
                   {/* <ul> */}
                     {/* <li><b>Top levell domain :</b>{filterCountry?.topLevelDomain[0]}</li> */}
                     {/* <li><b> Currency : </b>
                      { filterCountry?.currencies.map(currency => {
                        return <b>{currency.name}</b>
                      })
                     }</li> */}
                     {/* <li><b>Language :</b>
                     {filterCountry?.languages.map( lang => {
                       return (
                         <>
                         <b>{lang.name}</b>
                         </>
                       )
                     })}</li>
                   </ul>
                   <div>
                   <b>Border Countries : </b>
                     {
                       filterCountry?.languages.map(native => {
                         return  <div>
                           <button>{native.nativeName}</button>
                           </div>
                       })
                     } */}
                   {/* </div> */}
                 </div>
              </article>
          </section>
       
     </div>
  )
}