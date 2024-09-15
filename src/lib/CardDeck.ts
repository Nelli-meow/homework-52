import Card from './Card';

class CardDeck {
    deck: Card[];

    constructor() {
        this.deck = [];

        const suits = ['hearts', 'diams', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        suits.forEach(suit => {
            ranks.forEach(rank => {
                this.deck.push(new Card(rank, suit));
            });
        });
    }

    getCard(): Card {
        const index = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(index, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];

        for (let i: number = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}
export default CardDeck;