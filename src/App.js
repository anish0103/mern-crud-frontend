import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navigation from './Components/Navigation';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';

function App() {

  const [UserData, SetUserData] = useState([])

  const SubmitHandler = (data) => {
    SetUserData((prev) => {
      return [...prev, data]
    })
  }

  console.log(UserData)
  
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage Data={UserData} />
        </Route>
        <Route path="/add/" exact >
          <AddPage SubmitHandler={SubmitHandler} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;