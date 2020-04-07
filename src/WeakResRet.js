import React from 'react';

export default function WeakResRet(props) {
  return (
    <div className='WeakResRet'>
      <div className='wrt-el'>
        weakness
        {props.weakness}
        <div className='Ball'></div>
      </div>
      <div className='wrt-el'>resistance{props.resistance}</div>
      <div className='wrt-el'>
        retreat cost
        <div className='retreat-cost'>
          {props.retreatNum > 0 && <div className='Ball'></div>}
          {props.retreatNum > 1 && <div className='Ball'></div>}
          {props.retreatNum > 2 && <div className='Ball'></div>}
          {props.retreatNum > 3 && <div className='Ball'></div>}
        </div>
      </div>
    </div>
  );
}
