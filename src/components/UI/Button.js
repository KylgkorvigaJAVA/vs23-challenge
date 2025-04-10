import React from "react";
import "../../index.css";

const Button = ({ textOnly, onClick, children }) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    }

    const buttonClass = textOnly ? "text-button" : "button";

    return (
        <button className={buttonClass} onClick={handleButtonClick}>
            {children}
        </button>
    );
}

export default Button;