import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Profile from './Profile'
import Page404 from './Page404'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
