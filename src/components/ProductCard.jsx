import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({title, index, image, price}) => {
  return (
    <div key={index} className='col-3 card'>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{price}&euro;</p>
        <NavLink className="btn btn-primary" to={`/products/${index}`} >Visualizza prodotto</NavLink>
    </div>
  )
}

export default ProductCard