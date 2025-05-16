import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WhoAmI from './pages/WhoAmI'
import Products from './pages/products/Products'
import Homepage from './pages/Homepage'
import ProductDetail from './pages/products/ProductDetail'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/me' Component={WhoAmI}></Route>
          <Route path='/products'>
            <Route index Component={Products} />
            <Route path=':id' Component={ProductDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
