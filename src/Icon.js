import React from 'react';

const Icon = ({ type, width = 24, height = 24, className = 'icon' }) => (
  <svg className={className} height={height} width={width}>
    <use xlinkHref={`#${type}`} />
  </svg>
);

export default Icon;
