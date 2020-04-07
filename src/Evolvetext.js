import React from 'react';

export default function Evolvetext(props) {
  return (
    <div className='Evolvetext'>
      <div>
        <i>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Evolves from{' '}
          {props.evolvesFrom}
        </i>
      </div>
      <div>Put {props.name} on the Basic Pokemon</div>
    </div>
  );
}
