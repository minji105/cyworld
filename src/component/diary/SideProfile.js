import React, { useState } from 'react';
import styles from './styling/SideProfile.module.css'

function SideProfile() {
  const [showCopied, setShowCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const email = 'ajhjmj9@naver.com';

  const handleEmailClick = (e) => {
    navigator.clipboard.writeText(email);
    setMousePosition({ x: e.clientX, y: e.clientY });
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  return (
    <div className="left-container">
      <img src="/img/etc/profile.jpg" alt="profile" className={styles.profile} />

      <div className={styles.divider}></div>

      <div className={styles.today}>
        <span>TODAY IS..</span>
        <img src="/img/etc/emoji.png" alt="happy" className={styles.emoji} />
        <span>행복</span>
      </div>

      <div className={styles.introduce}>
        안녕하세요. 프론트엔드 개발자 조민지입니다.<br />
        제 미니홈피에 방문해 주셔서 감사합니다. ^^/*
      </div>

      <div className={styles.name}>
        조민지 <div className={styles.gender}>♀</div>
      </div>

      <div className={styles.links}>
        ├ git: <a href="https://github.com/minji105">https://github.com/minji105</a><br />
        └ email: <span onClick={handleEmailClick} className='nes-pointer'>ajhjmj9@naver.com</span>
        {showCopied && (
          <div
            className={styles.copied}
            style={{ top: mousePosition.y, left: mousePosition.x }}
          >
            복사 완료♪
          </div>
        )}
      </div>
    </div>
  )
}

export default SideProfile;