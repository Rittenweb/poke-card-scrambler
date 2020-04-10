import React from 'react';

export default function Portrait(props) {
  return (
    <div
      className='Portrait'
      style={{ backgroundImage: `url(${props.image})` }}></div>
  );
}
