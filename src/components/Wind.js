import React from 'react';
import Value from './Value.js'

const Wind = props => {
  return (
    <div className="wind">
      <Value label={'Wind Direction'} value={props.windDirection}/>
      <Value label={'Wind Speed'} value={props.windSpeed}/>
      <Value label={'Gusts'} value={props.gust}/>
    </div>
  );
}

export default Wind;
