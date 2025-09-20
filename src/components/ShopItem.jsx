import React from 'react';

export default function ShopItem({ item }) {
    return (
        <div className="shop-item">
            <img className="item-image" src={item.img} alt={item.name} />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-color">{item.color}</p>
            <span className="item-price">${item.price}</span>
            <button className="add-to-cart-btn">Add to cart</button>
        </div>
    );
}
