import React from 'react'
import Nav from './Nav'
import { products } from '../db/db'
import { Outlet, NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deposit } from '../features/deposit/depositSlice';
function Layout() {

    const dispatch = useDispatch()
    const {depAmount} = useSelector(state=>state.rootReducer)

    const depositAmount = ()=>{
        console.log(dispatch);
        dispatch(deposit(45));
    }

  return (
    <>
        <div>
            <Nav products={products}/>
        </div>

        <div className="row">
            <div className="col-md-9">
                <Outlet/>
            </div>
            <div className="col-md-3">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Important Links</li>
                    <li class="list-group-item"><NavLink to={'/about'}>About</NavLink></li>
                    <li class="list-group-item"><a href="#section2">Our Vision</a></li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
                <button onClick={depositAmount}>Deposit ${depAmount.value}</button>
            </div>
        </div>

        <div className='footer'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum distinctio ducimus saepe quisquam quas atque minima ea adipisci quod accusantium. Voluptas autem reprehenderit soluta ea quia, dolor natus et harum.</p>
            <h1>${depAmount.value}</h1>
        </div>
    </>
  )
}

export default Layout