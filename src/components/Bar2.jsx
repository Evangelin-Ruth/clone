import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "./Bar2.css";

const Dropdown = () => {
  const [selected, setSelected] = useState('Following');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Following', 'Popular', 'New & Noteworthy'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      {selected} <span className="arrow">{isOpen? <i class="fa-solid fa-caret-up"/> : <i class="fa-solid fa-caret-down"/>}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-item ${option === selected? 'elected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Bar2 = () => {
  return (
    <div className="bar2-container">
      <div className="bar2-left">
        <Dropdown />
        <button className="bar2-button">
          <FontAwesomeIcon icon={faAngleLeft} className="bar2-button-icon" />
        </button>
        <button className="bar2-button">Discover</button>
        <button className="bar2-button">Animation</button>
        <button className="bar2-button">Branding</button>
        <button className="bar2-button">Illustration</button>
        <button className="bar2-button">Mobile</button>
        <button className="bar2-button">Print</button>
        <button className="bar2-button">Product Design</button>
        <button className="bar2-button">Typography</button>
        <button className="bar2-button">Web Design</button>
        <button className="bar2-button">
          <FontAwesomeIcon icon={faAngleRight} className="bar2-button-icon" />
        </button>
      </div>
      <div className="bar2-right">
        <button className="bar2-button">
          <FontAwesomeIcon icon={faBars} className="bar2-button-icon" /> Filters
        </button>
      </div>
    </div>
  );
};

export default Bar2;