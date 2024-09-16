import React, { useState } from 'react';
import './App.css';
import PlayingCard from './components/Cards/playingCard.tsx';
import CardDeck from "./lib/CardDeck.ts";
import PokerHand from './lib/PokerHand.ts';
import Card from "./lib/Card.ts";

const App = () => {
    const [hand, setHand] = useState<Card[]>([]);
    const [outcome, setOutcome] = useState<string | null>(null);
    const [deck] = useState<CardDeck>(new CardDeck());
    const [totalCards, setTotalCards] = useState<number>(52);

    const getCards = () => {
        if (totalCards < 5) {
            alert('В колоде недостаточно карт :(');
            return;
        }

        const cards = deck.getCards(5);
        setHand(cards);

        const pokerHand = new PokerHand(cards);
        setOutcome(pokerHand.getOutcome());

        setTotalCards(totalCards - 5);
    };

    return (
        <div>
            <p>Карт в колоде: {totalCards}</p>
            <button onClick={getCards} className="cardBtn">Раздать карты</button>

            {hand.length > 0 ? (
                <div>
                    <div className="playingCards faceImages cards">
                        {hand.map((card) => (
                            <PlayingCard key={`${card.rank}-${card.suit}`} rank={card.rank} suit={card.suit}/>
                        ))}
                    </div>
                    <div>
                        Комбинация: {outcome}
                    </div>
                </div>
            ): null }
        </div>
    );
};

export default App
