import React from 'react';

export default function Dexbar(props) {
  return (
    <div className='gradient-wrap'>
      <div
        className='dex-bar-wrap'
        style={{
          background: `${props.color}`,
        }}>
        <div className='dex-bar'>
          <i>
            Although long extinct, in rare cases, it can be genetically
            resurrected from fossils. &nbsp; LV .19 &nbsp; #138
          </i>
        </div>
      </div>
    </div>
  );
}
