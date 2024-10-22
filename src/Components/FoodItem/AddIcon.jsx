import React,{useContext, useEffect, useState} from 'react';
import Dishescss from './Addicon.module.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';


function AddIcon({ foodName,foodImage,foodPrice,foodId}) {
  
  const [itemCount, setItemCount] = useState(0);
  const {cartItem,setCartItems,cartCount,setCartCount,addToCart,removeFromCart} = useContext(StoreContext);
   
  console.log(cartItem)

  // const handleOnNav = ()=>{
  //   setItemCount(prev => prev + 1);
  //   setCartCount(prev=>prev+1);
  //   setCartItems([...cartItem,newObj]);
  //   setQuantity(prev=>prev+1);
  // }

  return (
    <>
      {cartItem[foodId] ?
        <div className={Dishescss.icons}>
          <img onClick={()=> removeFromCart(foodId)} src={assets.remove_icon_red} />
          <h3 >{cartItem[foodId]}</h3>
          <img onClick={()=> addToCart(foodId)} src={assets.add_icon_green} />
        </div>
        : <img id={Dishescss.whiteAddIcon} onClick={() => addToCart(foodId)} src={assets.add_icon_white} />}
    </>
  )
}

export default AddIcon;
