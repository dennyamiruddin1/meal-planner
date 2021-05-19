import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './shared/components/Navigation/Navigation'
import Home from './pages/home/Home'
import About from './pages/about/About'
import FoodDetails from './pages/food/FoodDetails'
import CreateFood from './pages/food/CreateFood'
import EditFood from './pages/food/EditFood';
import Planner from './pages/planner/Planner'
import CreatePlanner from './pages/planner/CreatePlanner'
import CreateUser from './pages/user/CreateUser'
import Login from './pages/login/Login'

import './App.css';


function App() {

  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/planner" exact>
            <Planner />
          </Route>
          <Route path="/planner/new" exact>
            <CreatePlanner />
          </Route>
          <Route path="/user/new" exact>
            <CreateUser />
          </Route>
          <Route path="/food/new" exact>
            <CreateFood />
          </Route>
          <Route path="/food/:id" exact>
            <FoodDetails />
          </Route>
          <Route path="/food/edit/:id" exact>
            <EditFood />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
