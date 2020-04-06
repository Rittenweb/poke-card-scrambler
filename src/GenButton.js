import React from 'react';
import getUrl from './getUrl';

export default function GenButton() {
  function randomize() {
    let url = getUrl();
    let state = {};
    fetch(url)
      .then((data) => {
        //handle rejection
        return data.json();
      })
      .then((data) => {
        state.name = data.card.name;
        state.image = data.card.imageUrl;
        state.rarity = data.card.rarity;
        state.stage = data.card.subtype;
        if (state.stage !== 'Basic') {
          state.evolvesFrom = data.card.evolvesFrom;
        }
      });
    state.retreatNum = Math.ceil(Math.random() * 4);
    state.hitPoints = Math.ceil(Math.random() * 10) * 10 + 20;
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
    state.type = types[Math.ceil(Math.random() * 9)];
    types.push(null);
    state.weakness = types[Math.ceil(Math.random() * 10)];
    state.resistance = types[Math.ceil(Math.random() * 10)];
    console.log(state);
  }

  return (
    <div>
      <button onClick={randomize}>Randomize!</button>
    </div>
  );
}
