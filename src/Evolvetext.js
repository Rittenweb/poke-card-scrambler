import React from 'react';

export default function Evolvetext(props) {
  let textLeft;
  let textRight;
  if (props.stage === 'Basic') {
    textLeft = 'Basic Pokémon';
    textRight = '';
  } else if (props.stage === 'Stage 1') {
    textLeft = `Evolves from ${props.evolvesFrom}`;
    textRight = `Put ${props.name} on the Basic Pokémon`;
  } else if (props.stage === 'Stage 2') {
    textLeft = `Evolves from ${props.evolvesFrom}`;
    textRight = `Put ${props.name} on the Stage 1 Pokémon`;
  }

  return (
    <div className='Evolvetext'>
      <div>
        <i>{textLeft}</i>
      </div>
      <div>{textRight}</div>
    </div>
  );
}
