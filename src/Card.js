import React from 'react';
import Namebar from './Namebar';
import Portrait from './Portrait';
import Statsbar from './Statsbar';
import Attacks from './Attacks';
import WeakResRet from './WeakResRet';
import Dexbar from './Dexbar';
import Evolvetext from './Evolvetext';

export default function Card(props) {
  let cardColor;
  switch (props.card.type) {
    default:
      cardColor = 'hsl(194, 26%, 90%)';
      break;
    case 'Grass':
      cardColor = 'hsl(108.2, 60%, 35%)';
      break;
    case 'Fire':
      cardColor = 'hsl(14, 92%, 46%)';
      break;
    case 'Water':
      cardColor = 'hsl(206, 65%, 54%)';
      break;
    case 'Lightning':
      cardColor = 'hsl(50, 89%, 59%)';
      break;
    case 'Fighting':
      cardColor = 'hsl(32, 100%, 34%)';
      break;
    case 'Psychic':
      cardColor = 'hsl(299, 28%, 47%)';
      break;
    case 'Colorless':
      cardColor = 'hsl(194, 26%, 90%)';
      break;
    case 'Darkness':
      cardColor = 'hsl(142, 8%, 29%)';
      break;
    case 'Metal':
      cardColor = 'hsl(140, 4%, 67%)';
      break;
  }

  return (
    <div className='Card' style={{ backgroundColor: `${cardColor}` }}>
      {/*<StageThumbnail/>*/}
      <Evolvetext
        name={props.card.name}
        evolvesFrom={props.card.evolvesFrom}
        stage={props.card.stage}
      />
      <Namebar
        name={props.card.name}
        hitPoints={props.card.hitPoints}
        type={props.card.type}
      />
      <Portrait image={props.card.image} />
      <Statsbar />
      <Attacks attacks={props.card.attacks} type={props.card.type} />
      <WeakResRet
        retreatNum={props.card.retreatNum}
        weakness={props.card.weakness}
        resistance={props.card.resistance}
      />
      <Dexbar />
      <div className='bottom-bar'>
        <b>Illus. Ken Sugimori</b> ©1995, 96, 98 Nintendo, Creatures, GAMEFREAK.
        ©1999-2000 Wizards. <b>16/151</b>
      </div>
      {/*
    <BottomBar/>
    */}
    </div>
  );
}
