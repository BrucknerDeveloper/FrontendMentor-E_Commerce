import React, {useState} from "react"

import iconPlus from "../../../assets/icon-plus.svg"
import iconMinus from "../../../assets/icon-minus.svg"
import CartImg from "../../../assets/icon-cart.svg"
import ProductThumbnail from "../../../assets/image-product-1-thumbnail.jpg"

import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"

export default function Description() {
    const [product, setProduct] = useState({
        name: "Fall Limited Edition Sneakers",
        amount: 0,
        price: 125.00,
        img: ProductThumbnail
    })

    const {cartItems, addCartItem} = useContext(CartContext)

    function addToCart() {
        if(product.amount > 0)
            addCartItem(product)
    }
 
    function decreaseAmount() {
        setProduct(prev => {
            return prev.amount > 0 ? {...prev, amount: prev.amount - 1} : prev
        })
    }

    function increaseAmount() {
        setProduct(prev => {
            return prev.amount < 10 ? {...prev, amount: prev.amount + 1} : prev
        })
    }

    return (
        <div className="description">
            <h3 className="description__sub-header text-accent bold">Sneaker Company</h3>
            <h1 className="description__header text-dark bold">Fall Limited Edition Sneakers</h1>
            <p className="description__text text-regular">These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything 
                the weather can offer.</p>
            <div className="description__container-price">
                <h2 className="description__price text-dark bold">$125.00</h2>
                <h3 className="description__disount text-accent bold">50%</h3>
                <h3 className="description__old-price text-light bold">$250.00</h3>
            </div>
            <div className="description__container-btn">
                <div className="description__btn-amount">
                    <img onClick={decreaseAmount} className="description__minus" src={iconMinus} />
                    <p className="description__amount text-dark bold">{product.amount}</p>
                    <img onClick={increaseAmount} className="description__plus" src={iconPlus} />
                </div>
                <button onClick={addToCart} className="description__btn-addCart text-white bold">
                    <img className="description__cart" src={CartImg}/>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}