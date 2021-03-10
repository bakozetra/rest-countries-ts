import React, { useContext } from 'react';
import { Switch, Route, Link } from "react-router-dom"
import './App.css';
import { DetailCountry } from './Components/detailCountry';
import { GlobalProvider } from './Components/GlobalState';
import { Input } from './Components/header';
import { Test } from './Components/ListOfCountry';
import { SelectCountry } from './Components/Select';


function App() {
  return (
    <GlobalProvider>
      <Input />
      <SelectCountry />
      <Switch>
        <Route exact path="/">
          <Test />
        </Route>
        <Route exact path="/:place">
          <DetailCountry/>
        </Route>
      </Switch>
      <div className=" Container">
      </div>
    </GlobalProvider>
  );
}

export default App;
