import React, { useRef, useEffect } from "react";
import { useCart } from "../../store/CartContext";
import "../../index.css";

const Modal = ({ isOpen, onClose }) => {
    const dialogRef = useRef()
    const { cartItems } = useCart();
    const [checkoutAlert, setCheckoutAlert] = React.useState("")

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (parseFloat(item.price) * item.quantity);
        }, 0).toFixed(2);
    };

    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal()
        } else {
            dialogRef.current.close()
        }

        return () => {
            if (dialogRef.current?.open) dialogRef.current.close()
        }
    }, [isOpen])

    const handleCheckoutClick = () => {
        setCheckoutAlert("Store does not exist yet!");
    }

    return (
        <dialog className="modal cart" ref={dialogRef}>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li className="cart-item" key={item.id}>
                        <p>{item.name} - {item.quantity}x</p>
                    </li>
                ))}
            </ul>
            <p className="cart-total">Total: {calculateTotal()}€</p>
            {checkoutAlert && (
                <p style={{ color: "red" }}>{checkoutAlert}</p>
            )}
            <p className="modal-actions">
                <button className="text-button" onClick={onClose}>Close</button>
                <button className="button" onClick={handleCheckoutClick}>Checkout</button>
            </p>
        </dialog>
    )
}

export default Modal