import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import {useLoaderData} from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';
function Home({update}) {

  const products = useLoaderData();
  const {depAmount} = useSelector(state=>state.rootReducer)

  return (
    <div>
      <h1>${depAmount.value}</h1>
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










