import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import {useLoaderData} from "react-router-dom";
import axios from 'axios';

function Home({update}) {

  const products = useLoaderData();

  return (
    <div>
      {
        products.map(product=><Card product={product}/>)
      }
      <button onClick={update}>Update Price</button>
    </div>
  )
}

export default Home;

export const getData = async ()=>{
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
}










