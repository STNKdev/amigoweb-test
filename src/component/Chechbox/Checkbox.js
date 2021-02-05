import React from 'react';
import './style.css';
import checkImg from './Check.svg';

export const Checkbox = ({ active, onClick }) => {
  return (
      <div className={`checkbox ${ active ? 'checkbox-active' : ''}`} onClick={onClick}>
        {active && <img src={checkImg} alt=''/>}
      </div>
  );
};

