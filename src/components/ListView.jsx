import React from 'react';
import ShopItem from './ShopItem';

export default function ListView({ items }) {
    return (
        <div className="list-view">
            {items.map((item, index) => (
                <ShopItem key={index} item={item} />
            ))}
        </div>
    );
}
