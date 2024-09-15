import * as React from "react";

interface Props {
    rank: keyof typeof rankObj,
    suit: keyof typeof suitObj
}

const suitObj = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
}

const rankObj = {
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    ten: '10',
    J: 'Jack',
    Q: 'Queen',
    K: 'King',
    A: 'Ace'
}

const Card: React.FC<Props> = ({ rank, suit }) => {

    return (
        <div>
            <span className={`card rank-${rank} ${suit}`}>
                <span className="rank">{rankObj[rank]}</span>
                <span className="suit">{suitObj[suit]}</span>
            </span>
        </div>
    );
}

export default Card;