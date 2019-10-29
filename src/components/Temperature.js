import React from 'react';

const Temperature = props => {
  console.log(props.temperature);
  return (
    <div className="temperature">
      <h1>{props.temperature}</h1>
    </div>
  );
}

export default Temperature;
