import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = (props) => {

  return (
    <div className="navigation">
      <ul>
        <li><NavLink to="/" exact>
          Home
      </NavLink></li>
        <li><NavLink to="/planner">
          Planner
      </NavLink></li>
        <li><NavLink to="/food/new">
          Add Food
      </NavLink></li>
        <li><NavLink to="/about">
          About
      </NavLink></li>
        <li><NavLink to="/login">
          Login
      </NavLink></li>
      </ul>
    </div>

  );
}

export default Navigation;