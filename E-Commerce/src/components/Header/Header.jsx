import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"

import Cart from "./Cart/Cart"
import {CartContext} from "../../context/CartContext"

//images
import LogoImg from "../../assets/logo.svg"
import CartImg from "../../assets/icon-cart.svg"
import AvatarImg from "../../assets/image-avatar.png"
import MenuImg from "../../assets/icon-menu.svg"
import CrossImg from "../../assets/icon-close.svg"

export default function Header() {
    const [showCart, setShowCart] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const {cartItems} = useContext(CartContext)

    React.useEffect(() => {
        function handleResize() {
            window.innerWidth >= 768 ? setShowMenu(true) : setShowMenu(false)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    function toggleShowMenu() {
        window.innerWidth < 768 && setShowMenu(prev => !prev)
    }

    function hoverStyles(e) {
    }

    return (
        <header className="header">
            <img onClick={toggleShowMenu} className="header__menu" src={MenuImg} />
            <Link className="header__logo" to="/" ><img className="header__logo" src={LogoImg}/></Link>
            {
                showMenu &&   
                <div className="header__container-nav">
                    <nav className="header__nav">
                        <img 
                            onClick={toggleShowMenu} 
                            className="header__close" src={CrossImg}
                        />
                        <Link 
                            onClick={toggleShowMenu} 
                            onMouseEnter={hoverStyles} 
                            onMouseLeave={hoverStyles} 
                            className="header__nav-item text-dark bold" to="/"
                        >
                            Collections
                        </Link>

                        <Link 
                            onClick={toggleShowMenu} 
                            onMouseEnter={hoverStyles} 
                            onMouseLeave={hoverStyles} 
                            className="header__nav-item text-dark bold" to="/men"
                        >
                            Men
                        </Link>
                        
                        <Link 
                            onClick={toggleShowMenu} 
                            onMouseEnter={hoverStyles} 
                            onMouseLeave={hoverStyles} 
                            className="header__nav-item text-dark bold" to="/women"
                        >
                            Women
                        </Link>

                        <Link 
                            onClick={toggleShowMenu} 
                            onMouseEnter={hoverStyles} 
                            onMouseLeave={hoverStyles} 
                            className="header__nav-item text-dark bold" to="/about"
                        >
                            About
                        </Link>

                        <Link 
                            onClick={toggleShowMenu} 
                            onMouseEnter={hoverStyles} 
                            onMouseLeave={hoverStyles} 
                            className="header__nav-item text-dark bold" to="/contact"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            }
          
            <div className="header__container">
                <img 
                    onClick={() => setShowCart(prev => !prev)} 
                    className="header__cart" src={CartImg}
                />
                {cartItems.length > 0 && <p className="header__cart-hover text-white bold">{cartItems.length}</p>}
                {showCart && <Cart />}
                <img className="header__avatar" src={AvatarImg}/>
            </div>
        </header>
    )
}