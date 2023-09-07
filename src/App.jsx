import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useState } from 'react'
import {products} from './db/db.js'
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import Nav from './components/Nav'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Detail, { getProductById } from './pages/Detail'
import { getData } from './pages/Home'
import AddProduct from './pages/AddProduct'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route 
          index 
          element={<Home/>}
          loader={getData}
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route 
          path='/detail/:id' 
          element={<Detail/>}
          loader={getProductById}
        />
        <Route path='/add-product' element={<AddProduct/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

 
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
