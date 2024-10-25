import React, { useContext } from 'react';
import placeordercss from './PlaceOrder.module.css';
import Navbar from '../Navbar/Navbar';
import cartcss from '../Cart/Cart.module.css'
import { StoreContext } from '../Context/StoreContext';
import Footer from '../Footer/Footer';

function PlaceOrder() {
    const { getTotalAmount } = useContext(StoreContext)
    return (
        <>
        <div className={placeordercss.container}>
            <Navbar />
            <div className={placeordercss.mainContainer}>
                <div className={placeordercss.placeOrder}>
                    <h1>Delivery Information</h1>
                    <div className={placeordercss.name}>
                        <input type="text" placeholder='FirstName...' />
                        <input type="text" placeholder='SecondName...' />
                    </div>
                    <div className={placeordercss.email}>
                        <input type="text" placeholder='Email...' />
                    </div>
                    <div className={placeordercss.email}>
                        <input type="text" placeholder='Street' />
                    </div>
                    <div className={placeordercss.name}>
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className={placeordercss.name}>
                        <input type="text" placeholder='Zip code' />
                        <input type="text" placeholder='Country...' />
                    </div>
                    <div className={placeordercss.email}>
                        <input type="text" placeholder='Phone' />
                    </div>
                </div>
                <div className={placeordercss.totalAmount}>
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
                            <p>&#8377;{getTotalAmount() + 5}</p>
                        </div>
                        <button >PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default PlaceOrder
