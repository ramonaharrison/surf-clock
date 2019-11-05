import React from 'react';

const Value = props => {

  const container = {
    width: '200px'
  }

  const label = {
    fontSize: '12px',
    textAlign: 'left',
    fontWeight: 'bold'
  }

  const value = {
    fontSize: '48px',
    textAlign: 'left'
  }

  return (
    <div style={container}>
      <div style={label}>{props.label}</div>
      <div style={value}>{props.value}</div>
    </div>
  );
}

export default Value;
