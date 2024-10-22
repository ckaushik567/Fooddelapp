import { createContext } from "react";
import { useState } from "react";

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
    const contextValue = {
        cartItem,
        setCartItems,
        cartCount,
        setCartCount,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider