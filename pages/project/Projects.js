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
              <tr key={project.title}>
                <td><Link href={`/project/${project.title}`}>{project.title}</Link></td>
              </tr>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;