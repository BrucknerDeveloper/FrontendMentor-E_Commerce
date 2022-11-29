import React, {useState, useContext} from "react"

import CartItem from "./CartItem/CartItem"
import {CartContext} from "../../../context/CartContext"
import deleteIcon from "../../../assets/icon-delete.svg"


export default function Cart() {
    const {cartItems, removeCartItem} = useContext(CartContext)
    const cartItemsComponents = cartItems.map((item, i) => 
        <CartItem  
            key={i} 
            index={i}
            amount={item.amount}
            name={item.name}
            price={item.price}
            img={item.img}
            deleteIcon={deleteIcon}
            remove={removeCartItem}
        />
    )

    

    return (
        <div className="cart">
            <p className="cart__header text-dark bold">Cart</p>
            <hr className="cart__hr"/>
            <div className="cart__container">
                {cartItems.length === 0 ? 
                    <p className="cart__emptyText text-regular bold">Your cart is empty.</p> : 
                    <div className="cart__container-components">
                        {cartItemsComponents}
                        <button className="cart__checkout bold">
                            Checkout
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}