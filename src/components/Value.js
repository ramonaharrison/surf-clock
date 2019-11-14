import React from 'react';

const Value = props => {

  const container = {
    width: '200px',
    padding: '10px 20px'
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

  const unit = {
    fontSize: '12px',
    fontWeight: 'bold',
    verticalAlign: 'middle'
  }

  return (
    <div style={container}>
      <div style={label}>{props.label}</div>
      <div style={value}>{props.value}<span style={unit}>{props.unit}</span></div>
    </div>
  );
}

export default Value;
