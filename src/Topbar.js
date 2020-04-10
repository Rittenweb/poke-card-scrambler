import React from 'react';
import Stagethumbnail from './Stagethumbnail';
import Evolvetext from './Evolvetext';
import Namebar from './Namebar';

export default function Topbar(props) {
  return (
    <div className='top-bar'>
      {props.stage !== 'Basic' && (
        <Stagethumbnail image={props.image} series={props.series} />
      )}
      <div className='name-and-evolve-bar'>
        <Evolvetext
          name={props.name}
          evolvesFrom={props.evolvesFrom}
          stage={props.stage}
        />
        <Namebar
          name={props.name}
          hitPoints={props.hitPoints}
          type={props.type}
        />
      </div>
    </div>
  );
}
