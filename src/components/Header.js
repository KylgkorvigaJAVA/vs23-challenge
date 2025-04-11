import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import "../index.css";
import Button from "./UI/Button.js";
import { useCart } from "../store/CartContext";
import CartModal from "./UI/Modal";

const Header = () => {
    const { cartItems } = useCart();
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleCartClick = () => {
        if (cartItems.length > 0) {
            setCartIsOpen(true);
        }
    }

    return (
        <>
            <CartModal isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)} />
            <header id="main-header">
                <div id="title">
                    <img src={logo} />
                    <h1>React Food Order App</h1>
                </div>
                <nav>
                    <Button textOnly={true} onClick={handleCartClick}>
                        Cart ({totalQuantity})
                    </Button>
                </nav>
            </header>
        </>

    )
}

export default Header;
