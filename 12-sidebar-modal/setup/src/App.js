import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { useGlobalContext } from './context'

import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import Team from './Team'
import Projects from './Projects'
import Calendar from './Calendar'
import Documents from './Documents'
import Error404 from './Error404'

import { FaBars } from 'react-icons/fa'

function App() {

  const { modal, toggleSidebar } = useGlobalContext();

  return (
    <>
      <Router>
        <button 
          className='sidebar-toggle' 
          onClick={() => toggleSidebar('Modal Text!')}>
          <FaBars />
        </button>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
            { modal.status && <Modal /> }
          </Route>
          <Route exact path='/team'>
            <Team />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/calendar'>
            <Calendar />
          </Route>
          <Route exact path='/documents'>
            <Documents />
          </Route>
          <Route path='*'>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
