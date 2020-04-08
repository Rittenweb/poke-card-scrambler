import React from 'react';
import getSymbol from './getSymbol';
import Stagethumbnail from './Stagethumbnail';

export default function Namebar(props) {
  let type = getSymbol(props.type);

  return (
    <div className='Namebar'>
      <div>{props.name}</div>
      <div className='top-right'>
        <div className='hit-points'>{props.hitPoints} HP</div>
        {type != undefined && (
          <img src={require(`./${type}`)} alt='T' className='type-symbol'></img>
        )}
      </div>
    </div>
  );
}
