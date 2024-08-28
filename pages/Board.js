import React, { useState } from 'react';
import menu from './styling/MenuStyle.module.css';
import useDropdown from '../src/hooks/useDropdown';

function Board() {
  const { activeDropdown, toggleDropdown } = useDropdown();
  const [activeSection, setActiveSection] = useState('React');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className={`left-container ${menu.menu}`}>
        <div className={menu.title}>프로젝트</div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(0)}>
            <div className={menu.Icon}></div>
            개발공부
            <span className={`${menu.arrow} ${activeDropdown === 0 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'React' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('React')}>
              React
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">

      </div>
    </>
  )
}

export default Board;