import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import GameList from '../pages/GameList'
import GameShow from '../pages/GameShow'
import NewGame from '../pages/NewGame'

import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Routes = (props)=> (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path="/games/new" component={ NewGame } />
    <Route path='/games/:id' component={ GameShow } />
    <Route path='/games' component={ GameList } />
    <Route path='/register' component={ Register } />
    <Route path='/profile' component={ Profile } />
    <Route path='/login' render={(routeComponentProps)=> {
      return <Login
               {...routeComponentProps}
               currentUser={ props.currentUser }
               storeUser= { props.storeUser }
               
              />

    }} />
  </Switch>
)

export default Routes;
