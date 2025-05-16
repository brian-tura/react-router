import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({})

    const getSingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)

            })
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <div className='container'>
            <div className="row align-items-center flex-column">
                <h1 className='col-5'>
                    Dettagli prodotto
                </h1>
                <div className='card col-5'>
                    <img src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <p>{product.price}&euro;</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail