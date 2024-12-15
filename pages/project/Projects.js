/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Link from "next/link";
import projects from "../../data/projectData";
import styles from '../styling/Projects.module.scss'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.section === selectedCategory);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={styles.header}>
            <div className="nes-select">
              <label htmlFor="category">카테고리</label>
              <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All" selected>전체보기</option>
                <option value="Web">Web</option>
                <option value="AR/VR">AR/VR</option>
              </select>
            </div>
          </div>

          <div className={styles.containers}>
            {filteredProjects.map((project, index) => (
              <Link href={`/project/${project.title}`}>
                <div className={`${styles.container} nes-container with-title is-centered`}>
                  <div class="title">{project.title}</div>
                  <img src={`${project.img}`} alt="Main Image" />
                  <div className={styles.stacks}>
                    {project.stack && project.stack.length > 0 ? (
                      project.stack.map((stack, index) => (
                        <div className="nes-badge" key={index}>
                          <span className={`${stack}`}>
                            {stack === 'Next' ? 'Next.js' : stack === 'Node' ? 'Node.js' : stack === 'C' ? 'C#' : stack}
                          </span>
                        </div>
                      ))
                    ) : (''
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;