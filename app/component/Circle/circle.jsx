import React from 'react';

const Circle = ({ size, position }) => {
  return (
    <svg width={size} height={size} style={position}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill="currentColor" />
    </svg>
  );
};

export default Circle;
