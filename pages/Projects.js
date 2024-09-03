import React, { useState } from "react";
import Link from "next/link";
import menu from './styling/MenuStyle.module.css'
import styles from './styling/Projects.module.css'

const projects = [
  {
    title: "Photographer Portfolio",
    section: "Web",
    link: "/projects/Joheesu",
    img: "/projects/joheesu/main.png",
    explain: "사진작가 포트폴리오 웹사이트입니다.",
    stacks: ["React", "CSS", "GSAP"]
  },
  {
    title: "Cyworld",
    section: "Web",
    link: "/projects/Cyworld",
    img: "/projects/joheesu/main.png",
    explain: "싸이월드를 리메이크한 제 개인 사이트입니다.",
    stacks: ["React", "Next", "Node", "MongoDB", "CSS"]
  },
  {
    title: "TicTacToe",
    section: "Web",
    link: "/projects/TicTacToe",
    img: "/projects/joheesu/main.png",
    explain: "리액트를 처음 공부하면서 만든 틱택톡 게임입니다.",
    stacks: ["React"]
  },
  {
    title: "Todo App",
    section: "Web",
    link: "/projects/Todo",
    img: "/projects/joheesu/main.png",
    explain: "뷰를 처음 공부하면서 만든 Todo App입니다.",
    stacks: ["Vue"]
  },
  {
    title: "Psycho Helmet Cult",
    section: "Web",
    link: "/projects/Mob",
    img: "/projects/joheesu/main.png",
    explain: "만화 <모브 사이코 100>에 나온 사이트를 모티브하여 만든 사이트입니다.",
    stacks: ["HTML", "CSS", "JS"]
  },
  {
    title: "Hotel Metaverse",
    section: "AR/VR",
    link: "/projects/HotelMetaverse",
    img: "/projects/joheesu/main.png",
    explain: "메타버스 기반 비대면 호텔 플레이스입니다.",
    stacks: ["HTML", "CSS", "JS", "Node", "MongoDB"]
  },
  {
    title: "Hand Tracking",
    section: "AR/VR",
    link: "/projects/HandTracking",
    img: "/projects/joheesu/main.png",
    explain: "허공 제스처를 통해 VR 환경에서 실시간 상호작용하는 방법을 연구한 것입니다.",
    stacks: ["Python", "C"]
  }
]

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.section === selectedCategory)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={styles.header}>
            <div className="nes-select">
              <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All" selected>전체보기</option>
                <option value="Web">Web</option>
                <option value="AR/VR">AR/VR</option>
              </select>
            </div>
          </div>

          <div className={styles.containers}>
            {filteredProjects.map((project, index) => (
              <Link href={project.link}>
                <div class={`${styles.container} nes-container with-title is-centered`}>
                  <div class="title">{project.title}</div>
                  <img src={`${project.img}`} alt="" />
                  <div className={styles.stacks}>
                    {project.stacks.map((stack, index) => (
                      <div className="nes-badge">
                        <span className={`${stack}`}>
                          {stack === 'Next' ? 'Next.js' : `${stack === 'Node' ? 'Node.js' : `${stack === 'C' ? 'C#' : stack}`}`}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.explain}>{project.explain}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <Ring />
      
      <div className={`left-container ${menu.menu}`}>
        <div className={menu.title}>프로젝트</div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(0)}>
            <div className={menu.Icon}></div>
            Web
            <span className={`${menu.arrow} ${activeDropdown === 0 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'TicTacToe' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('TicTacToe')}>
              TicTacToe
            </li>
            <li
              className={`${activeSection === 'Todo' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Todo')}>
              Todo
            </li>
            <li
              className={`${activeSection === 'Mob' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Mob')}>
              Mob
            </li>
            <li
              className={`${activeSection === 'Joheesu' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Joheesu')}>
              Joheesu
            </li>
            <li
              className={`${activeSection === 'Cyworld' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Cyworld')}>
              Cyworld
            </li>
          </ul>
        </div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(1)}>
            <div className={menu.Icon}></div>
            VR/AR
            <span className={`${menu.arrow} ${activeDropdown === 1 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 1 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'Hotel Metaverse' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('Hotel Metaverse')}>
              Hotel Metaverse
            </li>
            <li
              className={`${activeSection === 'HandTracking' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('HandTracking')}>
              HandTracking
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        {activeSection === 'TicTacToe' && (
          <TicTacToe />
        )}
        {activeSection === 'Todo' && (
          <Todo />
        )}
        {activeSection === 'Mob' && (
          <Mob />
        )}
        {activeSection === 'Joheesu' && (
          <Joheesu />
        )}
        {activeSection === 'Cyworld' && (
          <Cyworld />
        )}
        {activeSection === 'Hotel Metaverse' && (
          <Hotel />
        )}
        {activeSection === 'HandTracking' && (
          <HandTracking />
        )}
      </div> */}
    </>
  )
}

export default Projects;