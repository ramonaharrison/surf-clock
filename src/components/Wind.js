import React from 'react';
import Value from './Value.js'
import { toKnots } from '../services/converters.js'

const Wind = props => {
  return (
    <div className="wind">
      <Value label={'Wind Direction'} value={Math.round(toKnots(props.windDirection))} unit={'°'}/>
      <Value label={'Wind Speed'} value={Math.round(toKnots(props.windSpeed))} unit={'knots'}/>
      <Value label={'Gusts'} value={Math.round(toKnots(props.gust))} unit={'knots'}/>
    </div>
  );
}

export default Wind;
