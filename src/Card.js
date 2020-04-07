import React from 'react';
import Namebar from './Namebar';
import Portrait from './Portrait';
import Statsbar from './Statsbar';
import Attacks from './Attacks';
import WeakResRet from './WeakResRet';
import Dexbar from './Dexbar';
import Evolvetext from './Evolvetext';

export default function Card(props) {
  return (
    <div className='Card'>
      {/*<StageThumbnail/>*/}
      <Evolvetext name={props.card.name} evolvesFrom={props.card.evolvesFrom} />
      <Namebar
        name={props.card.name}
        hitPoints={props.card.hitPoints}
        type={props.card.type}
      />
      <Portrait image={props.card.image} />
      <Statsbar />
      <Attacks />
      <WeakResRet />
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
