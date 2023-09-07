import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Detail() {

  const product = useLoaderData();

  return (
    <div>
        <h3>Title: {product.title}</h3>
        <p>Description: {product.description}</p>
        <p><strong>Price: {product.price}</strong></p>
    </div>
  )
}

export default Detail


export const getProductById = async ({params})=>{
  const {id} = params;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
}