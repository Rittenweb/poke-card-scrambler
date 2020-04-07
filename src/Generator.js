import React, { useState } from 'react';
import getUrl from './getUrl';
import Card from './Card';

export default function Generator() {
  const [card, setCard] = useState({});

  function randomize() {
    let url = getUrl();
    let card = {};
    fetch(url)
      .then((data) => {
        if (data.status !== 200) {
          console.log('The request was rejected');
          return;
        }
        return data.json();
      })
      .then((data) => {
        card.name = data.card.name;
        card.image = data.card.imageUrl;
        card.rarity = data.card.rarity;
        card.stage = data.card.subtype;
        if (card.stage !== 'Basic') {
          card.evolvesFrom = data.card.evolvesFrom;
        }
        card.retreatNum = Math.floor(Math.random() * 5);
        card.hitPoints = Math.ceil(Math.random() * 10) * 10 + 20;
        let types = [
          'Grass',
          'Fire',
          'Water',
          'Lightning',
          'Fighting',
          'Psychic',
          'Colorless',
          'Darkness',
          'Metal',
        ];
        card.type = types[Math.floor(Math.random() * 9)];
        types.push(null);
        card.weakness = types[Math.floor(Math.random() * 10)];
        card.resistance = types[Math.floor(Math.random() * 10)];
        console.log(card);
        setCard(card);
      });
  }

  return (
    <div>
      <Card card={card} />
      <button onClick={randomize}>Randomize!</button>
    </div>
  );
}
