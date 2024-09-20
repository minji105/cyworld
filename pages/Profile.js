import React, { useState, useRef, useEffect } from "react";
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import menu from './styling/MenuStyle.module.scss';
import styles from './styling/Profile.module.scss';
import useDropdown from '../src/hooks/useDropdown';
import Ring from '../src/component/diary/Ring';

gsap.registerPlugin(TextPlugin);

function Profile() {
  const { activeDropdown, toggleDropdown } = useDropdown();
  const [activeSection, setActiveSection] = useState('introduce');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const textRef = useRef(null);

  useEffect(() => {
    const text = `<br />웹 개발에서 큰 즐거움을 느끼며 주로 사용하는 기술은 React, Next.js 입니다. 현재 프론트엔드 개발자로 구직 중입니다.
      <br />새로운 기술을 배우는 것을 좋아하고, 최근에는 GSAP와 Three.js 같은 애니메이션 라이브러리에 관심을 가지고 있어 조금씩 배우고 있습니다.
      <br />사용자 경험을 중요하게 생각하며 직관적이고 아름다운 웹 인터페이스를 만드는 것에 관심이 많습니다.`;

    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 5,
        text: { value: text },
        ease: 'none'
      });
    }
  }, []);

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
            <div className={styles.typing} ref={textRef} />
          </div>
        )}
      </div>
    </>
  )
}

export default Profile;