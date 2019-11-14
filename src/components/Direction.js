import React from 'react';
import Value from './Value.js'

const Direction = props => {
  return (
    <div>
      <Value label={props.label} value={Math.round(props.direction)} unit={'°'}/>
    </div>
  );
}

export default Direction;
