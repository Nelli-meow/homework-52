import React, { useState } from 'react';
import './App.css';
import PlayingCard from './components/Cards/playingCard.tsx';
import CardDeck from "./lib/CardDeck.ts";


const App = () => {
    const [hand, setHand] = useState<PlayingCard[]>([]);

    const getCards = () => {
        const cardDeck = new CardDeck();
        const cards = cardDeck.getCards(5);

        setHand(cards);
    };

    return (
        <div>
            <button onClick={getCards} className="cardBtn">Раздать карты</button>

            {hand.length > 0 ? (
                <div className="playingCards faceImages cards">
                    {hand.map((card) => (
                        <PlayingCard rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            ): null }
        </div>
    );
};

export default App
