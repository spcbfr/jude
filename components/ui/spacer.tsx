import React from 'react';
export default function Spacer (props: {horizontal: boolean, size: string | number}) {
  const defaultValue = 'auto';

  return (
    <div
      style={{
        width: props.horizontal ? props.size : defaultValue,
        height: !props.horizontal ? props.size : defaultValue,
      }}
    />
  );
};


Spacer.defaultProps = {
  horizontal: false,
};

