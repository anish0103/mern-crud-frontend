import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navigation from './Components/Navigation';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';

function App() {

  const [UserData, SetUserData] = useState([])

  const GetInformation = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/')
    const data = await response.json()
    SetUserData(data);
  }

  useEffect(() => {
    const GetUsers = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/')
      const data = await response.json()
      SetUserData(data);
    }
    GetUsers();
  }, [])

  const AddInformation = async (data) => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    GetInformation();
  }

  const DeleteInformation = async (data) => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/delete/${data}/`, {
      method: 'POST'
    })
    GetInformation();
  }

  const UpdateInformation = async (data) => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/update/${data.id}/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    GetInformation();
  }

  const SubmitHandler = (data) => {
    AddInformation(data);
  }

  const DeleteHandler = (d) => {
    DeleteInformation(d);
  }

  const UpdateHandler = (d) => {
    UpdateInformation(d);
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