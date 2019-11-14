import React from 'react';
import Value from './Value.js'
import { toKnots } from '../services/converters.js'

const Wind = props => {
  return (
    <div>
      <Value label={props.label} value={Math.round(toKnots(props.windValue))} unit={'knots'}/>
    </div>
  );
}

export default Wind;
