import React, { useState, useEffect } from 'react';
import getUrl from './getUrl';
import Card from './Card';
import Cardback from './Cardback';

export default function Generator() {
  const [card, setCard] = useState({});
  const [generated, setGenerated] = useState(false);

  let nextCard = {};

  useEffect(() => {
    randomize();
  }, [card, randomize]);

  //TODO: make a method to determine whether evo thumbnail type is base-shaped or neo-shaped

  function getCard() {
    setCard(nextCard);
    setGenerated(true);
  }

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
        console.log(data);
        return fetch(getUrl());
      })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.card.ability) {
          card.attacks = [data.card.ability];
        } else {
          card.attacks = [data.card.attacks[0]];
        }
        return fetch(getUrl());
      })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        card.attacks.push(data.card.attacks[data.card.attacks.length - 1]);
        nextCard = card;
      });
  }

  return (
    <div
      className='app-container'
      style={{ display: 'flex', flexDirection: 'column' }}>
      {generated ? <Card card={card} /> : <Cardback />}
      <button className='gen-button' onClick={getCard}>
        {generated ? 'Again!' : 'Flip over!'}
      </button>
    </div>
  );
}
