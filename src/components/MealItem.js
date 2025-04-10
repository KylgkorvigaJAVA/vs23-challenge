import React from "react";
import "../index.css";
import Button from "./UI/Button.js";
import { useCart } from "../store/CartContext";

const MealItem = (props) => {
    const { addItem } = useCart();

    const priceInEur = new Intl.NumberFormat("et-EE", {
        style: "currency",
        currency: "EUR",
    }).format(props.meal.price);

    const addToCartHandler = () => {
        addItem({ ...props.meal, id: props.meal.id || props.meal.name });
    };

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{priceInEur}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p>
                    <Button textOnly={false} onClick={addToCartHandler}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    )
}

export default MealItem;
