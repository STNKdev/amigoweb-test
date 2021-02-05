import React, { useState } from 'react';
import './style.css';

export const Button = ({ disable, text, type }) => {

  return (
      <button
          className={`btn ${disable ? 'btn-disable' : ''}`}
          disabled={disable}
          type={type || 'button'}
      >
        {text}
      </button>
  );

};
