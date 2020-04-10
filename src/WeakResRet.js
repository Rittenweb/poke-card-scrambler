import React from 'react';
import getSymbol from './getSymbol';

export default function WeakResRet(props) {
  let weak = getSymbol(props.weakness);
  let res = getSymbol(props.resistance);

  return (
    <div className='weak-res-ret'>
      <div className='wrt-el'>
        weakness
        {weak != undefined && (
          <img
            src={require(`./assets/${weak}`)}
            alt='W'
            className='energy-symbol'></img>
        )}
      </div>
      <div className='wrt-el'>
        resistance
        {res != undefined && (
          <img
            src={require(`./assets/${res}`)}
            alt='W'
            className='energy-symbol'></img>
        )}
      </div>
      <div className='wrt-el'>
        retreat cost
        <div className='retreat-cost'>
          {props.retreatNum > 0 && (
            <img
              src={require('./assets/colorless.png')}
              alt='C'
              className='energy-symbol'></img>
          )}
          {props.retreatNum > 1 && (
            <img
              src={require('./assets/colorless.png')}
              alt='C'
              className='energy-symbol'></img>
          )}
          {props.retreatNum > 2 && (
            <img
              src={require('./assets/colorless.png')}
              alt='C'
              className='energy-symbol'></img>
          )}
          {props.retreatNum > 3 && (
            <img
              src={require('./assets/colorless.png')}
              alt='C'
              className='energy-symbol'></img>
          )}
        </div>
      </div>
    </div>
  );
}
