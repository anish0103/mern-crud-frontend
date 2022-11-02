import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';
import Loading from './Pages/Loading';

function App() {

  const [UserData, SetUserData] = useState([])
  const [loading, setLoading] = useState(false)

  const GetInformation = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/')
    const data = await response.json()
    SetUserData(data);
    setLoading(false)
  }

  useEffect(() => {
    const GetUsers = async () => {
      setLoading(true)
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/')
      const data = await response.json()
      SetUserData(data);
      setLoading(false)
    }
    GetUsers();
  }, [])

  const AddInformation = async (data) => {
    setLoading(true)
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
    setLoading(true)
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/delete/${data}/`, {
      method: 'POST'
    })
    GetInformation();
  }

  const UpdateInformation = async (data) => {
    setLoading(true)
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

  if (loading) {
    return <Loading />
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
      <Footer />
    </Router>
  );
}

export default App;