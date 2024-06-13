import React, { useState } from 'react';
 
export const Button = () => {
  const [color, setColor] = useState('blue');
 
  const changeColor = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };
 
  return (
    <button style={{ backgroundColor: color }} onClick={changeColor}>
      Click me
    </button>
  );
};
 