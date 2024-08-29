import React, { useState } from "react";
import menu from './styling/MenuStyle.module.css';
import content from '../src/projects/styling/Content.module.css';
import styles from './styling/Profile.module.css';
import useDropdown from '../src/hooks/useDropdown';
import Ring from '../src/component/diary/Ring';

function Profile() {
  const { activeDropdown, toggleDropdown } = useDropdown();
  const [activeSection, setActiveSection] = useState('introduce');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Ring />

      <div className={`left-container ${menu.menu}`}>
        <div className={menu.title}>프로필</div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(0)}>
            <div className={menu.Icon}></div>
            내 소개
            <span className={`${menu.arrow} ${activeDropdown === 0 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ""}`}>
            <li
              className={`${activeSection === 'introduce' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('introduce')}>
              소개
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        {activeSection === 'introduce' && (
          <div className={styles.container}>
            <img src="/img/etc/introduce.png" alt="my-profile" />
            <h2>안녕하세요<br />
              프론트엔드 개발자 조민지입니다.</h2>
            제 미니홈피에 방문해주셔서 감사합니다 ^^
          </div>
        )}
      </div>
    </>
  )
}

export default Profile;