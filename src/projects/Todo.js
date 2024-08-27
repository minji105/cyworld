import React from "react";
import content from './styling/Content.module.css';

function Todo() {
  return (
    <div className="content">
      <div className={content.header}>
        <h3>Todo</h3>
        <span className="retro">2024</span>
      </div>

      <div className={content.subContent}>
        뷰를 처음 공부하면서 만든 Todo App입니다.

        <div className={`${content.link} retro`}>
          Link:  <a href="https://github.com/minji105/TodoApp_vue.js" target="_blank" rel="noreferrer" >https://github.com/minji105/TodoApp_vue.js</a> <br />
          Git:  <a href="https://minji105.github.io/TodoApp_vue.js/" target="_blank" rel="noreferrer" >https://minji105.github.io/TodoApp_vue.js/</a>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>사용스택
      </div>
      <div className={content.subContent}>
        - CSS<br />
        - Vue.js
      </div>
    </div>
  )
}

export default Todo;