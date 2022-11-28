import React from "react"

import useCurrencyFormat from "../../../../customHooks/useCurrencyFormat"

export default function CartItem(props) {

    const [formatCurrency] = useCurrencyFormat()

    function truncateString(str) {
        return str.slice(0, 20) + "..."
    }

    return (
            <div className="cartItem">
                <img className="cartItem__img" src={props.img} />
                <p className="cartItem__name text-light">{truncateString(props.name)}</p>
                <p className="cartItem__price text-light">
                    {formatCurrency(props.price)} x {props.amount} 
                    <span className="cartItem__total text-dark bold">{formatCurrency(props.price * props.amount)}</span>
                </p>
                <img onClick={() => props.remove(props.index)} className="cartItem__delete" src={props.deleteIcon} />
            </div>
    )
}