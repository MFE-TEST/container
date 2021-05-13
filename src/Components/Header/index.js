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
        <li>
          <NavLink to="/vue3">
            Vue3
          </NavLink>
        </li>
        <li>
          <NavLink to="/vue2">
            Vue2
          </NavLink>
        </li>
        <li>
          <NavLink to="/svelte">
            Svelte
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;
