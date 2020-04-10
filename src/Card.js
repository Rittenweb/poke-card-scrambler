import React from 'react';
import Namebar from './Namebar';
import Portrait from './Portrait';
import Statsbar from './Statsbar';
import Attacks from './Attacks';
import WeakResRet from './WeakResRet';
import Dexbar from './Dexbar';
import Evolvetext from './Evolvetext';
import Stagethumbnail from './Stagethumbnail';
import getColor from './getColor';

export default function Card(props) {
  let cardColor = getColor(props.card.type);
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
        ©1999-2000 Wizards. <b>16/151</b> ★
      </div>
    </div>
  );
}
