import React, { useState } from 'react';
import './style.css';
import chevronBottom from './Chevron_Bottom.svg';

export const Dropdown = ({ name, items }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [firstClick, setFirstClick] = useState(true);

  const activeLabel = items[activeItem];

  const onSelectItem = (index) => {
    setActiveItem(index);
    setFirstClick(false);
    setVisiblePopup(false);
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
      <label className='label-dropdown'>
        <h4>{name}</h4>
        <div className={`dropdown-menu ${visiblePopup ? "active" : ""}`} onClick={ toggleVisiblePopup }>
          <span>{firstClick ? name : activeLabel}</span>
          <img src={chevronBottom} width='30' height='30' alt='' />
        </div>
        {visiblePopup && (
            <div className="dropdown-popup">
              <ul>
                {items &&
                items.map((item, index) => {
                  return (
                      <li
                          className={`item`}
                          onClick={() => onSelectItem(index)}
                          key={`${item}_${index}`}
                      >
                        {item}
                      </li>
                  );
                })}
              </ul>
            </div>
        )}
      </label>
  );
};
