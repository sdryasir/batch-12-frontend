import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Modal from './Modal'
import { useSelector } from 'react-redux'

function Nav({products}) {
    let [isModalOpen, setIsModalOpen]= useState(false)

    const {cart} = useSelector(state=>state.rootReducer)
    let openModal = ()=>{

        if(isModalOpen){
            setIsModalOpen(false)
        }else{
            setIsModalOpen(true)
        }

        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <Link to={'/'} className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={'/about'}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/add-product'}>Add New Product</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className='btn btn-info me-2' onClick={openModal}>Login</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary"><i class="bi bi-cart-fill"></i>{cart.cart && cart.cart.length}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {
                isModalOpen ? <Modal openModal={openModal}/> : ''
            }
        </>
    )
}

export default Nav