import React from 'react';

export default function Portrait(props) {
  console.log(props.image);
  return (
    <div
      className='Portrait'
      style={{ backgroundImage: `url(${props.image})` }}></div>
  );
}
