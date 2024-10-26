import React, { useContext, useEffect, useState } from 'react';
import Dishescss from './Addicon.module.css';
import addiconcss from './AddIcon.module.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';


function AddIcon({ foodName, foodImage, foodPrice, foodId }) {

  const [itemCount, setItemCount] = useState(0);
  const { cartItem, setCartItems, cartCount, setCartCount, addToCart, removeFromCart } = useContext(StoreContext);


  return (
    <>
    <div className={addiconcss.iconsContainer}>
      {cartItem[foodId] ?
        <div className={addiconcss.icons}>
            <img onClick={() => removeFromCart(foodId)} src={assets.remove_icon_red} />
            <h3 >{cartItem[foodId]}</h3>
            <img onClick={() => addToCart(foodId)} src={assets.add_icon_green} />
          </div>
        :  
          <div className={addiconcss.whiteAddIcon}><img onClick={() => addToCart(foodId)} src={assets.add_icon_white} /></div>
          }
          </div>
    </>
  )
}

export default AddIcon;
