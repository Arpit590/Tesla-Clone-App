import React from 'react'
import "./ButtonSecondary.css";

function ButtonSecondary({name}) {
    return (
        <button className="buttonSecondary">
            {name}
        </button>
    )
}

export default ButtonSecondary
