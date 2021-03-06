import React, { useState, useEffect } from 'react';
import getUrl from './getUrl';
import Card from './Card';
import Cardback from './Cardback';

export default function Generator() {
  const [card, setCard] = useState({});
  const [generated, setGenerated] = useState(false);
  const [waiting, setWaiting] = useState(false);

  let nextCard = {};
  let clickable = true;

  useEffect(() => {
    randomize();
  }, [card, randomize]);

  function getCard() {
    if (clickable) {
      setWaiting(false);
      setCard({ ...card, animation: 'flipout' });
      if (generated) {
        setTimeout(() => {
          setCard({ animation: 'flipinout' });
        }, 300);
      }
      let time = 900;
      if (!generated) time = 300;
      setTimeout(() => {
        setCard({ ...nextCard, animation: 'flipin' });
        setGenerated(true);
      }, time);
    } else {
      setWaiting(true);
    }
  }

  function randomize() {
    clickable = false;
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
        card.stage = data.card.subtype;
        if (card.stage !== 'Basic') {
          card.evolvesFrom = data.card.evolvesFrom;
          if (card.name.length > 15) {
            if (card.name.startsWith('Lt')) {
              card.name = card.name.split(' ')[2];
            } else {
              card.name = card.name.split(' ')[1];
            }
          }
        }
        card.series = data.card.series;
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
        clickable = true;
      });
  }

  return (
    <div className='app-container'>
      <header>
        <img
          src={require('./assets/logo.svg')}
          alt='PokeCard Scrambler'
          className='logo'
        />
      </header>
      <main className='main'>
        {Object.entries(card).length > 1 ? (
          <Card card={card} />
        ) : (
          <Cardback animation={card.animation} />
        )}
        <button className='gen-button' onClick={getCard}>
          {generated ? 'Again!' : 'Flip over!'}
        </button>
        {waiting && (
          <div className='waiting-flag'>Waiting on the API . . . Try again</div>
        )}
      </main>
    </div>
  );
}
