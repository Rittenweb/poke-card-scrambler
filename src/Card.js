import React from 'react';
import Namebar from './Namebar';
import Portrait from './Portrait';
import Statsbar from './Statsbar';
import Attacks from './Attacks';
import WeakResRet from './WeakResRet';
import Dexbar from './Dexbar';
import Evolvetext from './Evolvetext';
import Stagethumbnail from './Stagethumbnail';

export default function Card(props) {
  let cardColor;
  switch (props.card.type) {
    default:
      cardColor = `repeating-linear-gradient(10deg, #dcdfe3 0px, #c4bdc5 50px, #a5a1a1 100px, #dcdfe3 150px)`;
      break;
    case 'Grass':
      //cardColor = 'hsl(108.2, 60%, 35%)';
      cardColor =
        'repeating-linear-gradient(70deg, #4d8b3d 0px, #538e4d 40px, #5e905e 100px, #4d8b3d 150px)';
      break;
    case 'Fire':
      //cardColor = 'hsl(14, 92%, 46%)';
      cardColor =
        'repeating-linear-gradient(50deg, #d54425 0px, #c15130 40px, #ad5a3b 100px, #d54425 150px)';
      break;
    case 'Water':
      //cardColor = 'hsl(206, 65%, 54%)';
      cardColor =
        'repeating-linear-gradient(60deg, #2288c0 0px, #4ba2ba 40px, #80a5a8 100px, #2288c0 150px)';
      break;
    case 'Lightning':
      //cardColor = 'hsl(50, 89%, 59%)';
      cardColor =
        'repeating-linear-gradient(80deg, #dfb01f 0px, #d0ab3d 40px, #c3a859 100px, #dfb01f 150px)';
      break;
    case 'Fighting':
      //cardColor = 'hsl(32, 100%, 34%)';
      cardColor =
        'repeating-linear-gradient(30deg, #8c3909 0px, #944817 40px, #995728 100px, #8c3909 150px)';
      break;
    case 'Psychic':
      //cardColor = 'hsl(299, 28%, 47%)';
      cardColor =
        'repeating-linear-gradient(20deg, #815381 0px, #8c618c 40px, #967096 100px, #815381 150px)';
      break;
    case 'Colorless':
      //cardColor = 'hsl(194, 26%, 90%)';
      cardColor = `repeating-linear-gradient(10deg, #dcdfe3 0px, #c4bdc5 50px, #a5a1a1 100px, #dcdfe3 150px)`;
      break;
    case 'Darkness':
      //cardColor = 'hsl(142, 8%, 29%)';
      cardColor =
        'repeating-linear-gradient(40deg, #262222 0px, #2a2626 50px, #2f2929 100px, #262222 150px)';
      break;
    case 'Metal':
      //cardColor = 'hsl(140, 4%, 67%)';
      cardColor =
        'repeating-linear-gradient(100deg, #5c5959 0px, #6a6868 50px, #777777 100px, #5c5959 150px)';
      break;
  }

  let textColor = props.card.type === 'Darkness' ? 'antiquewhite' : 'black';

  return (
    <div
      className='Card'
      style={{ background: `${cardColor}`, color: `${textColor}` }}>
      <div className='top-bar'>
        {props.card.stage !== 'Basic' && (
          <Stagethumbnail image={props.card.image} series={props.card.series} />
        )}
        <div style={{ width: '244px' }}>
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
        </div>
      </div>
      <Portrait image={props.card.image} />
      <Statsbar />
      <Attacks
        attacks={props.card.attacks}
        type={props.card.type}
        name={props.card.name}
      />
      <WeakResRet
        retreatNum={props.card.retreatNum}
        weakness={props.card.weakness}
        resistance={props.card.resistance}
      />
      <div className='gradient-wrap'>
        <div className='dexbar-wrap' style={{ background: `${cardColor}` }}>
          <Dexbar />
        </div>
      </div>
      <div className='bottom-bar'>
        <b>Illus. Ken Sugimori</b> ©1995, 96, 98 Nintendo, Creatures, GAMEFREAK.
        ©1999-2000 Wizards. <b>16/151</b>
      </div>
    </div>
  );
}
