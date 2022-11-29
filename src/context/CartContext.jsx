import React, {useState} from "react"

const CartContext= React.createContext()

function CartContextProvider({children}) {
    const [cartItems, setCartItems]  = useState([])

    function addCartItem(newItem) {
        setCartItems(prev => [...prev, newItem])
    }

    function removeCartItem(oldIndex) {
        console.log("removing...")
        setCartItems(prev => prev.filter((item, i) => i !== oldIndex))
    }

    return (
        <CartContext.Provider value={{cartItems, addCartItem, removeCartItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}