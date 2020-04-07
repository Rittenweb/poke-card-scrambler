import React from 'react';

export default function Namebar(props) {
  console.log(props.name);
  return (
    <div className='Namebar'>
      <div>{props.name}</div>
      <div className='top-right'>
        <div className='hit-points'>{props.hitPoints} HP</div>
        <div className='type-symbol'>{props.type}</div>
      </div>
    </div>
  );
}
