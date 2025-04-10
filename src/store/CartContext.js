import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.findIndex(item => item.id === action.item.id);

        if (existingItemIndex !== -1) {

            const updatedState = [...state];
            updatedState[existingItemIndex] = {
                ...updatedState[existingItemIndex],
                quantity: updatedState[existingItemIndex].quantity + 1
            };
            return updatedState;
        } else {
            return [...state, { ...action.item, quantity: 1 }];
        }
    }
    return state;
};

export const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const addItem = (meal) => {
        dispatch({ type: 'ADD_ITEM', item: meal });
    };

    useEffect(() => {
        console.log('Items in cart:', cartItems);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;