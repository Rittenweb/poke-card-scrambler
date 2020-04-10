import React from 'react';
import getSymbol from './getSymbol';

export default function Namebar(props) {
  let type = getSymbol(props.type);

  return (
    <div className='name-bar'>
      <div>{props.name}</div>
      <div className='top-right'>
        <div className='hit-points'>{props.hitPoints} HP</div>
        <img
          src={require(`./assets/${type}`)}
          alt='T'
          className='type-symbol'></img>
      </div>
    </div>
  );
}
