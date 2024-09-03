import React from "react";
import content from './styling/Content.module.css';

function Mob() {
  return (
    <div className="content">
      <div className={content.header}>
        <h3>Psycho Helmet</h3>
        <span className="retro">2024</span>
      </div>

      <div className={content.subContent}>
        만화 "모브 사이코 100"에 나온 사이트를 모티브하여 만들었습니다.<br />
        메인 화면은 추후에 제작할 예정입니다.

        <div className={`${content.link} retro`}>
          Link:  <a href="https://minji105.github.io/mob/" target="_blank" rel="noreferrer" >https://minji105.github.io/mob/</a> <br />
          Git:  <a href="https://github.com/minji105/mob" target="_blank" rel="noreferrer" >https://github.com/minji105/mob</a>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>사용스택
      </div>
      <div className={content.subContent}>
        - HTML, CSS, JS<br />
      </div>
    </div>
  )
}

export default Mob;