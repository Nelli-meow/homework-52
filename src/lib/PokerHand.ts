
import Card from './Card';

class PokerHand {
    hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    getOutcome() {
        const rankCounts: { [key: string]: number } = {};
        const suitCounts: { [key: string]: number } = {};

        this.hand.forEach(card => {
            rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
            suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
        });

        let isThreeOfAKind = false;
        let pairsCount = 0;

        let isFlush = false;
        for (const suit in suitCounts) {
            if (suitCounts[suit] === 5) {
                isFlush = true;
                break;
            }
        }

        if (isFlush) {
            return "Флеш";
        }

        for (const rank in rankCounts) {
            const count = rankCounts[rank];
            if (count === 3) {
                isThreeOfAKind = true;
            } else if (count === 2) {
                pairsCount++;
            }
        }

        if (isThreeOfAKind) {
            return "Тройка";
        } else if (pairsCount === 2) {
            return "Две пары";
        } else if (pairsCount === 1) {
            return "Одна пара";
        }

        return "Старшая карта";

    }
}

export default PokerHand;
