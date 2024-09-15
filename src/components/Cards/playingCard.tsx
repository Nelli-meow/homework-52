import * as React from "react";

interface Props {
    rank: string,
    suit: string,
    key?: string,
}

const suitObj = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
}

const rankObj = {
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    J: 'Jack',
    Q: 'Queen',
    K: 'King',
    A: 'Ace',
};

const PlayingCard: React.FC<Props> = ({ rank, suit }) => {

    const rankDisplay = rankObj[rank];
    const suitDisplay = suitObj[suit];

    return (
        <div>
            <span className={`card rank-${rank} ${suit} imgCard`}>
                <span className="rank">{rankDisplay}</span>
                <span className="suit">{suitDisplay}</span>
            </span>
        </div>
    );
}

export default PlayingCard;