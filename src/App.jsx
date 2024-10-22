import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Signup/Login';
import Home from './Components/Home/Home';
import Signin from './Components/Login/Signin';
import Cart from './Components/Cart/Cart';
import { StoreContext } from './Components/Context/StoreContext';

function App() {
   
   const {cartItem} = useContext(StoreContext);
    
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Signin />} />
            <Route path='/signup' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </BrowserRouter>
   )
}
export default App
