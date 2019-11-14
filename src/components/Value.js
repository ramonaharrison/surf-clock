import React from 'react';

const Value = props => {

  const container = {
    width: '200px',
    padding: '8px 16px'
  }

  const label = {
    color: '#fde7dd',
    fontSize: '12px',
    textAlign: 'left',
    fontWeight: 'bold'
  }

  const value = {
    fontSize: '48px',
    textAlign: 'left'
  }

  const unit = {
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '4px',
    verticalAlign: 'super'
  }

  return (
    <div style={container}>
      <div style={label}>{props.label}</div>
      <div style={value}>{props.value}<span style={unit}>{props.unit}</span></div>
    </div>
  );
}

export default Value;
