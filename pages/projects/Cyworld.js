import React from "react";
import content from './styling/Content.module.css';

function Cyworld() {
  return (
    <div className="content">
      <div className={content.header}>
        <h3>Cyworld (현재 사이트)</h3>
        <span className="retro">2024</span>
      </div>

      <div className={content.subContent}>
        2000년대 대표 SNS였던 싸이월드를 제 개인 홈페이지로 리메이크한 웹사이트입니다.<br />
        싸이월드 특유의 디자인과 분위기를 최대한 재현하여 그 시절의 감성을 담아내고자 하였습니다.

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
        - Next.js<br />
        - Node.js<br />
        - MongoDB
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>화면 구성
      </div>
      <div className={content.subContent}>
        <table>
          <tr>
            <td>메인 화면</td>
            <td>프로필</td>
          </tr>
          <tr>
            <td><img src="/projects/joheesu/main.png" alt="main" /></td>
            <td><img src="/projects/joheesu/list.png" alt="list" /></td>
          </tr>
          <tr>
            <td>프로젝트</td>
            <td>게시판</td>
          </tr>
          <tr>
            <td><img src="/projects/joheesu/grid.png" alt="grid view" /></td>
            <td><img src="/projects/joheesu/detail.png" alt="detail view" /></td>
          </tr>
          <tr>
            <td>방명록</td>
            <td></td>
          </tr>
          <tr>
            <td><img src="/projects/joheesu/menu.png" alt="menu" /></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>추후 계획
      </div>
      <div className={content.subContent}>
        - 반응형으로 제작<br />
        - 투데이 이모지 선택 기능<br />
      </div>
    </div>
  )
}

export default Cyworld;