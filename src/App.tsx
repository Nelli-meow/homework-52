import './App.css';
import Card from './components/Cards/card.tsx';
import CardDeck from "./lib/CardDeck.ts";


const App = () => {

  const cardDeck = new CardDeck();
  const cards = cardDeck.getCards(5);

  console.log(cardDeck.deck);

  return (
      <div>
        {cards.map((oneCard) => (
            <Card key={`${oneCard.rank} ${oneCard.suit}`} rank={oneCard.rank} suit={oneCard.suit} />
        ))}
      </div>
  )
};

export default App
