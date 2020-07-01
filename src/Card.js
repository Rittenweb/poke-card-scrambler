import React from 'react';
import Topbar from './Topbar';
import Portrait from './Portrait';
import Statsbar from './Statsbar';
import Attacks from './Attacks';
import WeakResRet from './WeakResRet';
import Dexbar from './Dexbar';
import getColor from './getColor';

export default function Card(props) {
  let cardColor = getColor(props.card.type);
  let textColor = props.card.type === 'Darkness' ? 'antiquewhite' : 'black';

  return (
    <div
      className={`card ${props.card.animation}`}
      style={{ background: `${cardColor}`, color: `${textColor}` }}>
      <Topbar
        stage={props.card.stage}
        image={props.card.image}
        series={props.card.series}
        name={props.card.name}
        evolvesFrom={props.card.evolvesFrom}
        hitPoints={props.card.hitPoints}
        type={props.card.type}
      />
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
      <Dexbar color={cardColor} />
      <div className='bottom-bar'>
        <b>Illus. Ken Sugimori</b> ©1995, 96, 98 Nintendo, Creatures, GAMEFREAK.
        ©1999-2000 Wizards. <b>16/151</b> ★
      </div>
    </div>
  );
}
