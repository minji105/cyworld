/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styling/Projects.module.css'

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.section === selectedCategory)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
            {isLoggedIn && (
              <Link href="/project/WriteProject">
                <button className='nes-btn'>글쓰기</button>
              </Link>
            )}
          </div>

          <div className={styles.containers}>
            {filteredProjects.map((project, index) => (
              <Link href={`/project/${project.title}`}>
                <div class={`${styles.container} nes-container with-title is-centered`}>
                  <div class="title">{project.title}</div>
                  <img src={`http://localhost:3001/${project.mainImage}`} alt="Main Image" />
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