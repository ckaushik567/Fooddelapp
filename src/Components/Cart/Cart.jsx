import React, { useContext, useEffect } from 'react';
import cartcss from './Cart.module.css';
import Navbar from '../Navbar/Navbar';
import { assets, food_list } from '../../assets/assets';
import food1 from '../../assets/food_1.png';
import crossIcon from '../../assets/Cross_icon.png';
import { StoreContext } from '../Context/StoreContext';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cartItem, setCartItems, getTotalAmount, setCartCount } = useContext(StoreContext);
    const navigate = useNavigate();
    const removeItems = (id) => {
        const { [id]: _, ...newobj } = cartItem;
        setCartItems(newobj);
        setCartCount(prev => prev - 1)
    }
    return (
        <>
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

                            food_list.map((item) => {
                                if (cartItem[item._id] > 0) {
                                    return <> <div className={cartcss.cartItem}>
                                        <img src={item.image} />
                                        <p>{item.name}</p>
                                        <p>&#8377;{item.price}</p>
                                        <p>{cartItem[item._id]}</p>
                                        <p>&#8377;{item.price * cartItem[item._id]}</p>
                                        <img onClick={() => removeItems(item._id)} id={cartcss.crossIcon} src={crossIcon} />
                                    </div>
                                        <hr />
                                    </>
                                }
                            })
                        }
                    </div>
                    <div className={cartcss.bottomSection}>
                        <div className={cartcss.cartTotals}>
                            <h2>Cart Totals</h2>
                            <div className={cartcss.cartPriceTitle}>
                                <p>Subtotal</p>

                                <p>&#8377;{getTotalAmount()}</p>
                            </div>
                            <hr />
                            <div className={cartcss.cartPriceTotal}>
                                <p>Delvery Fee</p>
                                <p>&#8377;5</p>
                            </div>
                            <hr />
                            <div className={cartcss.Total}>
                                <h4>Total</h4>
                                <p>&#8377;{getTotalAmount() != 0 ? getTotalAmount() + 5 : 0}</p>
                            </div>
                            <button onClick={() => navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
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
            <Footer />
        </>
    )
}

export default Cart
