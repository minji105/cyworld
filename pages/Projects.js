import React from "react";
import menu from './styling/MenuStyle.module.css'
import useDropdown from '../src/hooks/useDropdown';

function Projects() {
  const { activeDropdown, toggleDropdown } = useDropdown();

  return (
    <>
      <div className={`left-container ${menu.menu}`}>
        <div className={menu.title}>프로젝트</div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(0)}>
            <img src="/img/folder.png" alt="" />
            Web
            <span className={`${menu.arrow} ${activeDropdown === 0 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ''}`}>
            <li>TicTacToe</li>
            <li>Todo</li>
            <li>Mob</li>
            <li>Joheesu</li>
            <li>Cyworld</li>
          </ul>
        </div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(1)}>
            <img src="/img/folder.png" alt="" />
            VR/AR
            <span className={`${menu.arrow} ${activeDropdown === 1 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 1 ? menu.active : ''}`}>
            <li>Hotel Metaverse</li>
            <li>Hand Tracking</li>
          </ul>
        </div>
      </div>

      <div className="right-container">

      </div>
    </>
  )
}

export default Projects;