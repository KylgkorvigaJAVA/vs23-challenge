import React from 'react';
import logo from '../assets/logo.jpg';
import "../index.css";
import Button from "./UI/Button.js";
import { useCart } from "../store/CartContext";

const Header = () => {
    const { cartItems } = useCart();

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true}>
                    Cart ({totalQuantity})
                </Button>
            </nav>
        </header>
    )
}

export default Header;
