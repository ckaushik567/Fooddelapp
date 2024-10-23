import React, { useContext, useEffect } from 'react';
import cartcss from './Cart.module.css';
import Navbar from '../Navbar/Navbar';
import { assets, food_list } from '../../assets/assets';
import food1 from '../../assets/food_1.png';
import crossIcon from '../../assets/Cross_icon.png';
import { StoreContext } from '../Context/StoreContext';

function Cart() {
    const { cartItem, setCartItems ,removeFromCart} = useContext(StoreContext);
    const { cartCount, setCartCount } = useContext(StoreContext);
    const { quantity, setQuantity } = useContext(StoreContext);
    console.warn(cartItem);

    const removeItems = (id)=>{
        const { [id]: _, ...newobj } = cartItem;
    setCartItems(newobj);
    setCartCount(prev=>prev-1)
    }

    let sumValues = (objects) => {
        return objects.reduce((sum, obj) => sum + obj.price, 0);
      };

    return (
        <div className="container">
            <div className={cartcss.container}>
                <Navbar />
                <div className={cartcss.cartItems}>
                    <div className={cartcss.itemTitles}>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {

                        food_list.map((item)=>{
                            if(cartItem[item._id]>0){
                                 
                                return <> <div className={cartcss.cartItem}>
                                    <img src={item.image}/>
                                    <p>{item.name}</p>
                                    <p>&#8377;{item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>&#8377;{item.price*cartItem[item._id]}</p>
                                    <img onClick={() => removeItems(item._id)} id={cartcss.crossIcon} src={crossIcon} />
                                </div>
                                <hr />
                                </>
                            }
                        })
                        // cartItem.map((cartFood, index) => {
                        //     return <><div className={cartcss.cartItem}>
                        //         <img src={cartFood.foodimage} />
                        //         <p>{cartFood.foodname}</p>
                        //         <p>&#8377;{cartFood.foodprice}</p>
                        //         <p>{cartFood.quanityt}</p>
                        //         <p>Total</p>
                        //         <img onClick={() => handleOnRemove(cartFood.foodname)} id={cartcss.crossIcon} src={crossIcon} />
                        //     </div>
                        //         <hr />
                        //     </>
                        // })
                    }
                </div>
                <div className={cartcss.bottomSection}>
                    <div className={cartcss.cartTotals}>
                        <h2>Cart Totals</h2>
                        <div className={cartcss.cartPriceTitle}>
                            <p>Subtotal</p>
                            {food_list.map((item)=>{
                                if(cartItem[item._id]>0){
                                    let total =sumValues([item]);
                                    console.log(total)
                                } 
                            })}
                        </div>
                        <hr />
                        <div className={cartcss.cartPriceTotal}>
                            <p>Delvery Fee</p>
                            <p>&#8377;5</p>
                        </div>
                        <hr />
                        <div className={cartcss.Total}>
                            <h4>Total</h4>
                            <p>$89</p>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className={cartcss.promocode}>
                        <p>If you have a promo code. Enter it here</p>
                        <div className={cartcss.inputbox}>
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
