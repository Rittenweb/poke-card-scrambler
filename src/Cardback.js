import React from 'react';

export default function Cardback({ animation }) {
  return (
    <img
      src={require('./assets/back.jpg')}
      alt='Card back'
      className={`card-back ${animation}`}></img>
  );
}
