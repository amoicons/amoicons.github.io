import React from 'react';
import '../node_modules/amoicons/build/amoicons.css';

const Icon = ({
  type,
  width,
  height,
  className = `amoicon amoicon-${type}`,
}) => (
  <svg className={className} height={height * 1.5} width={width * 1.5}>
    <use xlinkHref={`#${type}`} />
  </svg>
);

export default Icon;
