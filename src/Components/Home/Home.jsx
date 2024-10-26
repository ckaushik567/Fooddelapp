import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Dishes from '../Header/Dishes/Dishes';
import Footer from '../Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home({cartItem,setCartItems}) {
  const [cartCount,setCartCount] = useState(0);
  return (
    <>
    <div className='container'>
        <Navbar cartCount={cartCount}/>
        <Header/>
        <Dishes id="dishes" setCartCount={setCartCount}/>
     </div>
     <Footer/>
      
     </>
  )
}

export default Home
