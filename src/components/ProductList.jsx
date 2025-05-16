import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {products.map((product, index) => {
                    return (
                    <ProductCard image={product.image} index={index} title={product.title} price={product.price}/>
                )
                })}

            </div>
        </div>
    )
}

export default ProductList