import React from 'react';
import placeordercss from './PlaceOrder.module.css';
import Navbar from '../Navbar/Navbar';

function PlaceOrder() {
    return (
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
                        <input type="text" placeholder='Email...'/>
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
            </div>
        </div>
    )
}

export default PlaceOrder
