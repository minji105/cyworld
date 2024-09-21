import React, { useState } from "react";
import menu from './styling/MenuStyle.module.scss';
import styles from './styling/Profile.module.scss';
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
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'introduce' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('introduce')}>
              소개
            </li>
            <li
              className={`${activeSection === 'skill' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('skill')}>
              기술
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        {activeSection === 'introduce' && (
          <div className={styles.container}>
            <h2>안녕하세요 !<br />
              신입 개발자 조민지입니다.</h2>
            <div className={styles.goProject}>프로젝트 보러가기 👉</div>
            <div className={styles.info}>
              웹 개발에 즐거움을 느끼며 주로 React와 Next.js를 사용하여 개발합니다. <br />
              새로운 기술을 배우는 것을 좋아하고 꾸준히 더 나은 코드를 작성하기 위해 노력하고 있습니다.<br />
              사용자 경혐을 최우선으로 생각하며 아름답고 직관적인 인터페이스를 만드는 것에 큰 관심을 가지고 있습니다.
            </div>
            <div>

              <a href="https://github.com/minji105"><i className="nes-icon github "></i></a>
              <a href="https://www.instagram.com/minji_105/"><i className="nes-icon instagram "></i></a>

            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Profile;