import React from 'react';
import './style.css';


export const Input = ({ label, placeholder, error, value, onChange }) => {
  return (
      <label className='label-input'>
        <h4 className='input-title'>{label}</h4>
        <input
            className='input'
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error ? <span className='input-error'>{error}</span> : ''}
      </label>
  );
};

