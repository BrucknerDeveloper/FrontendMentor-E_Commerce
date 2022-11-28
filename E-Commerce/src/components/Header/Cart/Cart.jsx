import React, {useState, useContext} from "react"

import CartItem from "./CartItem/CartItem"
import {CartContext} from "../../../context/CartContext"

export default function Cart() {
    const {cartItems} = useContext(CartContext)
    const cartItemsComponents = cartItems.map((item, i) => 
        <CartItem  
            key={i} 
            amount={item.amount}
            name={item.name}
            price={item.price}
            img={item.img}
        />
    )

    return (
        <div className="cart">
            <p className="cart__header text-dark bold">Cart</p>
            <hr className="cart__hr"/>
            <div className="cart__container">
                {cartItems.length === 0 ? 
                    <p className="cart__emptyText text-regular bold">Your cart is empty.</p> : 
                    cartItemsComponents
                }
            </div>
        </div>
    )
}