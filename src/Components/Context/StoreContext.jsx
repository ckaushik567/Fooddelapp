import { createContext } from "react";
import { useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItems] = useState({});
    const [cartCount, setCartCount] = useState(0);

const addToCart = (itemId) => {
    if(!cartItem[itemId]) {
    setCartItems((prev)=>({...prev,[itemId]:1}));
    setCartCount(prev=>prev+1);
    }
    else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))}
}

const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    setCartCount(prev=>prev-1)
}

const getTotalAmount = () =>{
    let cartTotal = 0;
    for (const item in cartItem) {
        if(cartItem[item]>0){
            let getInfo = food_list.find((product)=>product._id==item);
            cartTotal+=getInfo.price*cartItem[item]
        }
    }
    return cartTotal
}
    const contextValue = {
        cartItem,
        setCartItems,
        cartCount,
        setCartCount,
        addToCart,
        removeFromCart,
        getTotalAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider