import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navigation from './Components/Navigation';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';

function App() {

  const [UserData, SetUserData] = useState([])

  const SubmitHandler = (data) => {
    SetUserData((prev) => {
      return [...prev, data]
    })
  }

  const DeleteHandler = (d) => {
    const Data = UserData.filter((data)=> data.id !== d);
    SetUserData(Data);
  }

  const UpdateHandler = (d) => {
    console.log(d);
    const Data = UserData.filter((data)=> data.PhoneNo !== d.PhoneNo);
    Data.push(d)
    Data.filter((data)=> console.log(data));
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage Data={UserData} DeleteHandler={DeleteHandler} />
        </Route>
        <Route path="/add/" exact >
          <AddPage SubmitHandler={SubmitHandler} />
        </Route>
        <Route path="/:params/" exact >
          <EditPage Data={UserData} UpdateHandler={UpdateHandler} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;