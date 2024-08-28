import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import menu from './styling/MenuStyle.module.css';
import useDropdown from '../src/hooks/useDropdown';

function Board() {
  const { activeDropdown, toggleDropdown } = useDropdown();
  const [activeSection, setActiveSection] = useState('React');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <div className={`left-container ${menu.menu}`}>
        <div className={menu.title}>프로젝트</div>

        <div className={menu.dropdown}>
          <div className={menu.dropdownBtn} onClick={() => toggleDropdown(0)}>
            <div className={menu.Icon}></div>
            개발공부
            <span className={`${menu.arrow} ${activeDropdown === 0 ? menu.up : menu.down}`}></span>
          </div>
          <ul className={`${menu.dropdownContent} ${activeDropdown === 0 ? menu.active : ''}`}>
            <li
              className={`${activeSection === 'React' ? menu.menuActive : ''}`}
              onClick={() => handleSectionClick('React')}>
              React
            </li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        <Link href="/Write">
          <button>글쓰기</button>
        </Link>
        <ul>
          {posts.map(post => (
            <li key={post.title}>
              <Link href={`/${post.title}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Board;