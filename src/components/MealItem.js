import React from "react";
import "../index.css";

const MealItem = (props) => {

    const priceInEur = new Intl.NumberFormat("et-EE", {
        style: "currency",
        currency: "EUR",
    }).format(props.meal.price);

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
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>

    )
}

export default MealItem