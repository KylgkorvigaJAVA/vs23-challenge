import React from 'react'
import logo from '../assets/logo.jpg'
import "../index.css"
import Button from "./UI/Button.js"
import { useCart } from "../store/CartContext"

const Header = () => {
    const { cartItems } = useCart();

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true}>
                    Cart ({cartItems.length})
                </Button>
            </nav>
        </header>
    )
}

export default Header;
