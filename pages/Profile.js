import React, { useState } from "react";
import Link from "next/link";
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
              className={`${activeSection === 'answers' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('answers')}>
              문답
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        {activeSection === 'introduce' && (
          <div className={`content ${styles.container}`}>
            <h2>안녕하세요!<br />
            웹 개발자 조민지입니다.</h2>
            <pre></pre>
            <p>현재 사이트는 싸이월드를 재현하여 만든 제 개인 미니홈피입니다.<br/>
              이력서 및 포트폴리오는 아래 사이트에서 확인해주세요.
            </p>
            <pre></pre>
            <Link href="https://minjicho.netlify.app/">https://minjicho.netlify.app/</Link>
          </div>
        )}
        {activeSection === 'answers' && (
          <div className="content">
            <div className={styles.answer}>
              <b>。.☆ [ Intro ] ☆.。</b>
              <p>
                이름: 조민지<br />
                생년월일: 980427<br />
                키: 176<br />
                혈액형: B형<br />
                별자리: 황소자리<br />
                성격: 차분<br />
              </p>
              <b>。.☆ [ Like ] ☆.。</b>
              <p>
                좋아하는 사람: 착한 사람<br />
                좋아하는 일: 새벽에 영화보기<br />
                좋아하는 색깔: 파랑<br />
                좋아하는 음식: 너무 많음<br />
                좋아하는 이상형: 착한 사람<br />
                좋아하는 물건: 테블릿<br />
                좋아하는 장소: 내 방<br />
                좋아하는 영화장르: 다크히어로, SF<br />
                좋아하는 노래: 밴드음악<br />
                좋아하는 프로그램: 유퀴즈<br />
                좋아하는 연예인: 신하균<br />
                좋아하는 가수: HYDE<br />
                좋아하는 동물: 나무늘보<br />
              </p>
              <b>。.☆ [ Now ] ☆.。</b>
              <p>
                현재 하는 일: 취준<br />
                현재 목표: 취업하기<br />
                가장 최근 울었던 일: 진격거보고 또 울었음<br />
                가장 최근 웃었던 일: 하이도 공연 때<br />
                현재 입은 옷: 잠옷 + 수면양말<br />
                현재 재산: 0에 수렴하는 중<br />
                오늘 먹은 것: 돼지고기호박짜글이<br />
              </p>
              <b>。.☆ [ Choose ] ☆.。</b>
              <p>
                밥 or 빵: 밥<br />
                피자 or 치킨: 치킨<br />
                구두 or 운동화: 운동화<br />
                복고 or 걸스힙합: 복고<br />
                발라드 or 트로트: 트로트<br />
                댄스 or 힙합: 댄스<br />
                보세 or 구제: 보세<br />
                바다 or 산: 바다<br />
              </p>
            </div>
            <p>출처: <Link href="https://pann.nate.com/talk/121006139">https://pann.nate.com/talk/121006139</Link></p>
          </div>
        )}
      </div>
    </>
  )
}

export default Profile;