import React from "react";
import content from './styling/Content.module.css';

function Joheesu() {
  return (
    <div className="content">
      <div className={content.header}>
        <h3>Joheesu</h3>
        <span className="retro">2024</span>
      </div>

      <div className={content.subContent}>
        사진작가 조희수의 포트폴리오 사이트입니다.<br />
        반응형으로 제작하였습니다.

        <div className={`${content.link} retro`}>
          Link:  <a href="https://minji105.github.io/mob/" target="_blank" rel="noreferrer" >https://minji105.github.io/mob/</a> <br />
          Git:  <a href="https://github.com/minji105/mob" target="_blank" rel="noreferrer" >https://github.com/minji105/mob</a>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>사용스택
      </div>
      <div className={content.subContent}>
        - CSS<br />
        - React.js<br />
        - Gsap
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>화면 구성
      </div>
      <div className={content.subContent}>
        <table className={content.table}>
          <tr>
            <td>메인 화면</td>
            <td>프로젝트 목록</td>
          </tr>
          <tr>
            <td><img src="/projects/joheesu/main.png" alt="main" /></td>
            <td><img src="/projects/joheesu/list.png" alt="list" /></td>
          </tr>
          <tr>
            <td>프로젝트(그리드 뷰)</td>
            <td>프로젝트(상세 뷰)</td>
          </tr>
          <tr>
            <td><img src="/projects/joheesu/grid.png" alt="grid view" /></td>
            <td><img src="/projects/joheesu/detail.png" alt="detail view" /></td>
          </tr>
          <tr>
            <td>메뉴</td>
            <td>소개</td>
          </tr>
          <tr>
            <td><img src="/projects/joheesu/menu.png" alt="menu" /></td>
            <td><img src="/projects/joheesu/contact.png" alt="contact" /></td>
          </tr>
        </table>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>추후 계획
      </div>
      <div className={content.subContent}>
        - Next.js 적용<br />
        - 메시지 전송 폼 제작
      </div>
    </div>
  )
}

export default Joheesu;