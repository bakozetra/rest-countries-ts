import React, { createContext , useEffect, useReducer } from 'react'

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

type Country  = {
  name ?: string,
  population : number,
  region : string ,
  capital : string,
  flag:string,
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
}
type Currency = {
  name : string ,
  symbol : string,
  code : string,
}

const initialStates : State =   {
  country : [],
}

type Action = {
   type : "CountyName",
   payload : []
}

type State = {
  country ?: Country[],
}

export function Reducer (state : State , action : Action) {
    switch(action.type) {
      case "CountyName" :
        return {
          ...state , 
          country : action.payload
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
  dispatch({type : "CountyName" , payload : data})
 }
 useEffect (() => {
   FetchData()
 } , [])
 console.log( state.country);
   return (
     <GlobalContext.Provider value={{country : state.country}}>
       {children}
     </GlobalContext.Provider>
   )
}
