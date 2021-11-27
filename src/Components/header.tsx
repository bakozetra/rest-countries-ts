import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalState'
export const Input = () => {
  const {searchCountryByName,filterCountryByRegion,} = useContext(GlobalContext)
  const [input , setInput] = useState('')
  return (
    <input 
    type="text"
    placeholder="Search for a country..."
    value = {input}
    onChange={(e) => {
      setInput(e.target.value)
      searchCountryByName(input)
    }
    }/>
  )
}