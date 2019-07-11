import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Controller from './Components/Controller';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp'
import './App.css';
import { AuthProvider } from './Components/auth.components/Auth';
import PrivateRoute from './Components/PrivateRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Controller} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;