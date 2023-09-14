import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'


function Card({product}) {

  const dispatch = useDispatch()

  const handleCartItem = (prod)=>{
    dispatch(addToCart(prod));
  }
  

  return (
   
     <div className="card">
        <img style={{width:'100px'}} src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <Link to={`/detail/${product.id}`}>
            <h5 className="card-title">{product.title}</h5>
          </Link>
            <a href="#" className="btn btn-primary">{product.price}</a>
            <button className="btn btn-info" onClick={()=>handleCartItem(product)}>Add to Cart</button>
        </div>
      </div>
   
  )
}

export default Card


let a = 'Yasir'

console.log('my name is' + a);

console.log(`my name is ${a}`);