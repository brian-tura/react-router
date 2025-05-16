import React, { useState } from 'react'
import MainNavBar from '../../components/MainNavBar'
import ProductList from '../../components/ProductList'

const Products = () => {


  return (
    <>
      <MainNavBar></MainNavBar>
      <main>
        <h1>Prodotti</h1>
        <div>
          <ProductList />
        </div>
      </main>
    </>
  )
}

export default Products