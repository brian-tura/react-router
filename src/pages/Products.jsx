import React from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <>
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
      <main>
        <h1>Prodotti</h1>
      </main>
    </>
  )
}

export default Products