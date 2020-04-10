import React from 'react';

export default function Portrait(props) {
  return (
    <div
      className='portrait'
      style={{ backgroundImage: `url(${props.image})` }}></div>
  );
}
