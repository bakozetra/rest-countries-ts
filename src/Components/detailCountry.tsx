import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import { GlobalContext } from './GlobalState';
export function DetailCountry() {
   const {country} = useContext(GlobalContext)
  let { place } = useParams<{ place : any }>();
  console.log(place);
  
  let filterCountry = country?.filter(p => p?.name === place)
   console.log(filterCountry);
/*
name ?: string,
  population : number,
  region : string ,
  capital : string,
  flag:string,
  nativeName : string,
  subregion : string, */

  return (
     <div>
       {filterCountry?.map(detail => {
          return  <section>
              <img src={detail.flag}/>
              <article>
                <h2>{detail.name}</h2>
                 <div>
                   <ul>
                     <li><b>Native Name :</b></li>
                     <li><b> Population:</b>{detail.population}</li>
                     <li><b>  Region:</b>{detail.region}</li>
                     <li><b>Sube Region:</b>{detail.subregion}</li>
                     <li><b> Capital :</b>{detail.capital}</li>
                   </ul>
                   <ul>
                     <li><b>Top levell domain :</b>{detail.topLevelDomain[0]}</li>
                     <li><b> Currency : </b>
                      { detail.currencies.map(currency => {
                        return <b>{currency.name}</b>
                      })
                     }</li>
                     <li><b>Language :</b>
                     {detail.languages.map( lang => {
                       console.log(lang);
                       console.log(lang.name);
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
                       detail.languages.map(native => {
                         return  <div>
                           <button>{native.nativeName}</button>
                           </div>
                       })
                     }
                   </div>
                 </div>
              </article>
          </section>
       })}
     </div>
  )
}