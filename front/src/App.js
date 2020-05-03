import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Card from './components/Card'
import History from './components/History'
import Formpi from './components/Forms/Formpi'
import Test from './components/Test'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/Card" component={Card}/>
            <Route exact path="/History" component={History}/>
            <Route exact path="/Formpi" component={Formpi}/>
            <Route exact path="/Test" component={Test} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
