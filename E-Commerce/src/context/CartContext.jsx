import React, {useState} from "react"

const CartContext= React.createContext()

function CartContextProvider({children}) {
    const [cartItems, setCartItems]  = useState([])

    function addCartItem(newItem) {
        setCartItems(prev => [...prev, newItem])
    }

    return (
        <CartContext.Provider value={{cartItems, addCartItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}