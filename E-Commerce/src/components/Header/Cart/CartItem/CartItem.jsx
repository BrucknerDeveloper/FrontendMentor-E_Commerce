import React from "react"


export default function CartItem(props) {

    return (
            <div className="cartItem">
                <img src={props.img} />
                {props.name}
                {props.price}
                {props.amount}
            </div>
    )
}