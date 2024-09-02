import React, { useState } from "react";
import menu from './styling/MenuStyle.module.css'
import styles from './styling/Projects.module.css'
import useDropdown from '../src/hooks/useDropdown';
import TicTacToe from "../src/projects/TicTacToe";
import Todo from "../src/projects/Todo";
import Mob from "../src/projects/Mob";
import Joheesu from "../src/projects/Joheesu";
import Cyworld from "../src/projects/Cyworld";
import Hotel from "../src/projects/Hotel";
import HandTracking from "../src/projects/HandTracking";
import Ring from '../src/component/diary/Ring';

function Projects() {
  const { activeDropdown, toggleDropdown } = useDropdown();
  const [activeSection, setActiveSection] = useState('TicTacToe');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={styles.header}>
            <div className="nes-select">
              <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All" selected>전체보기</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <Ring />
      
      <div className={`left-container ${menu.menu}`}>
        <div className={menu.title}>프로젝트</div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(0)}>
            <div className={menu.Icon}></div>
            Web
            <span className={`${menu.arrow} ${activeDropdown === 0 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'TicTacToe' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('TicTacToe')}>
              TicTacToe
            </li>
            <li
              className={`${activeSection === 'Todo' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Todo')}>
              Todo
            </li>
            <li
              className={`${activeSection === 'Mob' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Mob')}>
              Mob
            </li>
            <li
              className={`${activeSection === 'Joheesu' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Joheesu')}>
              Joheesu
            </li>
            <li
              className={`${activeSection === 'Cyworld' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Cyworld')}>
              Cyworld
            </li>
          </ul>
        </div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(1)}>
            <div className={menu.Icon}></div>
            VR/AR
            <span className={`${menu.arrow} ${activeDropdown === 1 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 1 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'Hotel Metaverse' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Hotel Metaverse')}>
              Hotel Metaverse
            </li>
            <li
              className={`${activeSection === 'HandTracking' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('HandTracking')}>
              HandTracking
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        {activeSection === 'TicTacToe' && (
          <TicTacToe />
        )}
        {activeSection === 'Todo' && (
          <Todo />
        )}
        {activeSection === 'Mob' && (
          <Mob />
        )}
        {activeSection === 'Joheesu' && (
          <Joheesu />
        )}
        {activeSection === 'Cyworld' && (
          <Cyworld />
        )}
        {activeSection === 'Hotel Metaverse' && (
          <Hotel />
        )}
        {activeSection === 'HandTracking' && (
          <HandTracking />
        )}
      </div> */}
    </>
  )
}

export default Projects;