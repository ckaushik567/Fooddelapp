import React, { useContext, useState } from 'react';
import Navbarcss from './Navbar.module.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import { Link } from 'react-router-dom';
 

function Navbar( ) {
  const navigate = useNavigate();
  const {underline, setUnderline} = useContext(StoreContext)
  const data = JSON.parse(localStorage.getItem('inputData'));
  const {cartCount} = useContext(StoreContext);


  const handleOnNavi = ()=>{
     navigate('/login');
     console.log(localStorage.length)
  };

  console.log(underline)

  const handleOncart = ()=>{
   navigate('/cart')
  }

  return (
     <div className={Navbarcss.container}>
        <div className={Navbarcss.logo}>
             <h1>Tomato.</h1>
        </div>
        <div className={Navbarcss.manu}>
        <Link to='/' onClick={()=>setUnderline('home')} className={underline=='home'?Navbarcss.active:""}><li>home  </li></Link>
         <a href= '#dishes' onClick={()=>setUnderline('menu')} className={underline=='menu'?Navbarcss.active:""}>menu</a>
            <a onClick={()=>setUnderline('mobile app')} className={underline=='mobile app'?Navbarcss.active:""}>mobile app</a>
            <a href='#footer' onClick={()=>setUnderline('contact us')} className={underline=='contact us'?Navbarcss.active:""}>contact us</a>
        </div>
        <div className={Navbarcss.iconsSection}>
            <li><img src={assets.search_icon}/></li>
            <li onClick={handleOncart}><img src={assets.basket_icon} />{cartCount!=0?<sup>{cartCount}</sup>:""}</li>
             {sessionStorage.length!=0  ? <li id={Navbarcss.signin}>{data.firstName.substring(0,1)}{data.secondName.substring(0,1)}</li>:<li onClick={handleOnNavi} id={Navbarcss.signin}>sign in</li>}
        </div>
     </div>
  )
}

export default Navbar
