import React from "react";
import content from './styling/Content.module.css';

function TicTacToe() {
  return (
    <div className="content">
      <div className={content.header}>
        <h3>TicTacToe</h3>
        <span className="retro">2024</span>
      </div>

      <div className={content.subContent}>
        리액트를 처음 공부하면서 만든 틱택톡 게임입니다.

        <div className={`${content.link} retro`}>
          Link:  <a href="https://minji105.github.io/TicTacToe/" target="_blank" rel="noreferrer" >https://minji105.github.io/TicTacToe/</a> <br />
          Git:  <a href="https://github.com/minji105/TicTacToe" target="_blank" rel="noreferrer" >https://github.com/minji105/TicTacToe</a>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>사용스택
      </div>
      <div className={content.subContent}>
        - CSS<br />
        - React
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>실행영상
      </div>
      <div className={content.subContent}>
        <video src="/projects/tictactoe/execute.mp4" autoPlay loop muted playsInline></video>
      </div>
    </div>
  )
}

export default TicTacToe;