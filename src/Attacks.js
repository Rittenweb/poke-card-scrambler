import React from 'react';
import getSymbol from './getSymbol';
import rename from './rename';

export default function Attacks(props) {
  let firstName;
  if (props.attacks[0].type) {
    firstName = 'Pokémon Power: ' + props.attacks[0].name;
  } else {
    if (props.attacks[0].cost.length > props.attacks[1].cost.length) {
      [props.attacks[0], props.attacks[1]] = [
        props.attacks[1],
        props.attacks[0],
      ];
    }
    firstName = props.attacks[0].name;
  }

  function scaleText(str) {
    if (str.length < 70) {
      return 8;
    } else if (str.length < 95) {
      return 7.5;
    } else if (str.length < 120) {
      return 7;
    } else if (str.length < 145) {
      return 6.5;
    } else if (str.length < 170) {
      return 6;
    } else if (str.length < 195) {
      return 5.5;
    } else {
      return 5;
    }
  }

  let text1 = rename(props.attacks[0].text, props.name);
  let text2 = rename(props.attacks[1].text, props.name);

  let textSize1 = scaleText(text1);
  let textSize2 = scaleText(text2);

  let type = getSymbol(props.type);

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
                    src={require(`./assets/colorless.png`)}
                    className='energy-symbol'></img>
                );
              } else {
                return (
                  <img
                    alt='C'
                    src={require(`./assets/${type}`)}
                    className='energy-symbol'></img>
                );
              }
            })}
          </div>
        )}
        <div className='attackText' style={{ fontSize: `${textSize1}pt` }}>
          <b>{firstName}</b> {text1}
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
                  src={require(`./assets/colorless.png`)}
                  className='energy-symbol'></img>
              );
            } else {
              return (
                <img
                  alt='C'
                  src={require(`./assets/${type}`)}
                  className='energy-symbol'></img>
              );
            }
          })}
        </div>
        <div className='attackText' style={{ fontSize: `${textSize2}pt` }}>
          <b>{props.attacks[1].name}</b> {text2}
        </div>
        {props.attacks[1].damage && (
          <div className='damage'>{props.attacks[1].damage}</div>
        )}
      </div>
    </div>
  );
}
