import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
    return (
        <div className="cards-view">
            {cards.map((card, index) => (
                <ShopCard key={index} card={card} />
            ))}
        </div>
    );
}
