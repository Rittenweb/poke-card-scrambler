import React from 'react';
import getSymbol from './getSymbol';

export default function Attacks(props) {
  //TODO: Define first render so that none of the tree is made and conditions like this aren't necessary.
  if (!props.attacks) {
    return <div className='Attacks'></div>;
  }

  let type = getSymbol(props.type);

  let firstName;
  if (props.attacks[0].type) {
    firstName = 'Pokémon Power: ' + props.attacks[0].name;
  } else {
    firstName = props.attacks[0].name;
  }
  return (
    <div className='Attacks'>
      <div className='attack' style={{ paddingBottom: '4px' }}>
        {props.attacks[0].cost && (
          <div className='cost'>
            {props.attacks[0].cost.map((el) => {
              if (el === 'Colorless') {
                return (
                  <img
                    alt='C'
                    src={require(`./colorless.png`)}
                    className='energy-symbol'></img>
                );
              } else {
                return (
                  <img
                    alt='C'
                    src={require(`./${type}`)}
                    className='energy-symbol'></img>
                );
              }
            })}
          </div>
        )}
        <div className='attackText'>
          <b>{firstName}</b> {props.attacks[0].text}
        </div>
        {props.attacks[0].damage && (
          <div className='damage'>{props.attacks[0].damage}</div>
        )}
      </div>
      <div
        className='attack'
        style={{ borderTop: '1px solid black', paddingTop: '4px' }}>
        <div className='cost'>
          {props.attacks[1].cost.map((el) => {
            if (el === 'Colorless') {
              return (
                <img
                  alt='C'
                  src={require(`./colorless.png`)}
                  className='energy-symbol'></img>
              );
            } else {
              return (
                <img
                  alt='C'
                  src={require(`./${type}`)}
                  className='energy-symbol'></img>
              );
            }
          })}
        </div>
        <div className='attackText'>
          <b>{props.attacks[1].name}</b> {props.attacks[1].text}
        </div>
        {props.attacks[1].damage && (
          <div className='damage'>{props.attacks[1].damage}</div>
        )}
      </div>
    </div>
  );
}
