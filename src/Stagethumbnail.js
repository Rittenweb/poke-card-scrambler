import React from 'react';

export default function Stagethumbnail(props) {
  let shapeClass = 'thumbnail thumbnail-base';

  if (props.series === 'Neo') {
    shapeClass = 'thumbnail thumbnail-neo';
  }

  return (
    <div
      className={`${shapeClass}`}
      style={{ backgroundImage: `url(${props.image})` }}></div>
  );
}
