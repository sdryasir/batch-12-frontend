import React from 'react'
import { Link } from 'react-router-dom'
function Card({product}) {

  

  return (
   <Link to={`/detail/${product.id}`}>
     <div className="card">
        <img style={{width:'100px'}} src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <a href="#" className="btn btn-primary">{product.price}</a>
            <button className="btn btn-info">Add to Cart</button>
        </div>
      </div>
   </Link>
  )
}

export default Card


let a = 'Yasir'

console.log('my name is' + a);

console.log(`my name is ${a}`);