import React, {useState} from "react"
import {Link} from "react-router-dom"

import Cart from "./Cart/Cart"

//images
import LogoImg from "../../assets/logo.svg"
import CartImg from "../../assets/icon-cart.svg"
import AvatarImg from "../../assets/image-avatar.png"
import MenuImg from "../../assets/icon-menu.svg"

export default function Header() {
    const [showCart, setShowCart] = useState(false)

    return (
        <header className="header">
            <img className="header__menu" src={MenuImg} />
            <img className="header__logo" src={LogoImg}/> 
            <nav className="header__nav">
                <Link className="header__nav-item regular" to="/">Collections</Link>
                <Link className="header__nav-item regular" to="/men">Men</Link>
                <Link className="header__nav-item regular" to="/women">Women</Link>
                <Link className="header__nav-item regular" to="/about">About</Link>
                <Link className="header__nav-item regular" to="/contact">Contact</Link>
            </nav>
            <div className="header__container">
                <img 
                    onClick={() => setShowCart(prev => !prev)} 
                    className="header__cart" src={CartImg}
                />
                <p className="header__cart-hover text-white bold">3</p>
                {showCart && <Cart />}
                <img className="header__avatar" src={AvatarImg}/>
            </div>
        </header>
    )
}