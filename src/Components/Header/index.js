import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h2>Container Header</h2>
      <ul>
        <li>
          <NavLink to="/home">
              Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/test">
            Test
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;
