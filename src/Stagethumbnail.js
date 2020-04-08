import React from 'react';

export default function Stagethumbnail(props) {
  return (
    <div
      className='Stagethumbnail'
      style={{ backgroundImage: `url(${props.image})` }}></div>
  );
}
