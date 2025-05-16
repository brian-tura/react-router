import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavBar = () => {
  return (
    <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/me">Who am I</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default MainNavBar