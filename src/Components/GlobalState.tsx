import { stat } from 'fs';
import React, { createContext , useEffect, useReducer } from 'react'


const COUNTRY_URL = "https://restcountries.com/v3.1/all";

type Country  = {
  name ?: { common : string , nativeName: { common : string} , official : string},
  population : number,
  region : string ,
  capital : string,
  flags:{ png : string },
  nativeName : string,
  subregion : string,
  languages : languages[];
  currencies : Currency[],
  topLevelDomain : string,
}

type languages = {
  name : string,
  nativeName : string,
  iso639_1: string,
  iso639_2: string
  common: string
}
type Currency = {
  name : string ,
  symbol : string,
  code : string,
}

type State = {
  allcountries ?: Country[],
  displayCountry?: Country[], 
  searchCountryByName: (param: string) => void,
  filterCountryByRegion: (param: string) => void,
}

const initialStates : State =   {
  allcountries : [],
  displayCountry: [], 
  searchCountryByName: () => {},
  filterCountryByRegion: () => {},
}

type Action =
 | { type: 'CountryName' , data : []}
 | { type: 'FilterByRegion', data? : Country[] }
 | {type: 'SearchCountry', data?:Country[]}; 


export function Reducer (state : State , action : Action) {
    switch(action.type) {
      case "CountryName" :
        return {
          ...state , 
          allcountries : action.data,
          displayCountry :action.data
        }
        case 'FilterByRegion': 
        return {
          ...state,
          displayCountry :action.data
        }
        case 'SearchCountry':
          return {
            ...state,
            displayCountry :action.data
          }
        default :
        return state
    }
} 

export const GlobalContext = createContext(initialStates);

export  const GlobalProvider : React.FC = ({children}) => {
 const [state , dispatch] = useReducer(Reducer ,initialStates)
 async function FetchData () {
  const res =  await fetch(COUNTRY_URL);
  const data = await res.json()
  dispatch({type : "CountryName" , data : data})
 }

 useEffect (() => {
  FetchData()
} , [])


 function searchCountryByName (input : string) {
  const countryName = state.allcountries?.filter((country) => country?.name?.common.toLowerCase().includes(input.toLocaleLowerCase()))
  dispatch({type:'SearchCountry' , data: countryName })
}

function filterCountryByRegion (input : string) {
  const countryByRegion = state.allcountries?.filter((country) => country.region.toLocaleLowerCase() === input.toLocaleLowerCase())
  dispatch({type:'FilterByRegion', data: countryByRegion})
}

   return (
     <GlobalContext.Provider value={
       {allcountries : state.allcountries,
        displayCountry : state.displayCountry,
        searchCountryByName,
        filterCountryByRegion,
       }}>
       {children}
     </GlobalContext.Provider>
   )
}
