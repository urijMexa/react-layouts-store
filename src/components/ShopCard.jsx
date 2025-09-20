import React from 'react';

export default function ShopCard({ card }) {
    return (
        <div className="shop-card">
            <h2 className="card-header">{card.name}</h2>
            <p className="card-color">{card.color}</p>
            <img className="card-image" src={card.img} alt={card.name} />
            <div className="card-footer">
                <span className="card-price">${card.price}</span>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
        </div>
    );
}
