import React, {useState} from "react"

import CartItem from "./CartItem/CartItem"

export default function Cart() {
    const [Items, setItems] = useState([])

    return (
        <div className="cart">
            <p className="cart__header text-dark bold">Cart</p>
            <hr className="cart__hr"/>
            <div className="cart__container">
                {Items.length === 0 ? 
                    <p className="cart__emptyText text-regular bold">Your cart is empty.</p> : 
                    <CartItem />
                }
            </div>
        </div>
    )
}