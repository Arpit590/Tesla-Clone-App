import React from 'react'
import "./HomePage.css";

function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__info">
                <div className="homepage__text">
                    <h1>Model 3 </h1>
                    <h4>Order Online for
                        <span> Touchless Delievery</span>
                    </h4>
                </div>
                <div className="homepage__actions">
                    <button className="homepage__buttonPrimary">
                        Custom Order
                    </button>
                    <button className="homepage__buttonSecondary">
                        Existing Inventory
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
